---
sidebar_position: 3
title: Creating Marks
description: How to create marks on the Bitmark blockchain
---

# Creating Marks

Learn how to create marks to timestamp and attribute content on the Bitmark blockchain.

## What is a Mark?

A mark is a special transaction that:
- Records a reference (URL, address, content hash) on the blockchain
- Transfers value to content creators
- Builds your reputation as a curator
- Creates permanent, verifiable proof of endorsement

## Mark Types

| Type | Code | Use Case |
|------|------|----------|
| URL | `0x01` | Web content, articles |
| Address | `0x02` | Creator tips, attribution |
| Content | `0x03` | File hashes, IPFS CIDs |
| Nostr Profile | `0x04` | Mark a person on Nostr |
| Git Commit | `0x05` | Code contributions |
| Document | `0x06` | Proof of existence |
| Timestamp | `0x07` | Cross-chain timestamping |
| Nostr Event | `0x08` | Mark specific notes |
| URI | `0x09` | Linked data identifiers |

## Using bitmark-api

The easiest way to create marks is via the REST API.

### Prerequisites

```bash
# Install and run bitmark-api
git clone https://github.com/project-bitmark/bitmark-api.git
cd bitmark-api
npm install
npm start
```

### Create a URL Mark

```bash
curl -X POST http://localhost:3000/api/mark \
  -H "Content-Type: application/json" \
  -d '{
    "type": 1,
    "reference": "https://example.com/great-article",
    "privateKey": "your-private-key-wif"
  }'
```

Response:
```json
{
  "txid": "abc123...",
  "referenceHash": "8823a419...",
  "fee": 1000000
}
```

### Create an Address Mark

```bash
curl -X POST http://localhost:3000/api/mark \
  -H "Content-Type: application/json" \
  -d '{
    "type": 2,
    "reference": "bCreatorAddress...",
    "amount": 10000000,
    "privateKey": "your-private-key-wif"
  }'
```

### Create a Document Mark

```bash
# First compute the file hash
FILE_HASH=$(sha256sum document.pdf | cut -d' ' -f1)

curl -X POST http://localhost:3000/api/mark \
  -H "Content-Type: application/json" \
  -d "{
    \"type\": 6,
    \"referenceHash\": \"$FILE_HASH\",
    \"privateKey\": \"your-private-key-wif\"
  }"
```

## Using JavaScript

```javascript
const crypto = require('crypto');
const BitmarkAPI = require('bitmark-api-client');

const client = new BitmarkAPI({
  baseUrl: 'http://localhost:3000'
});

// Mark a URL
async function markURL(url, privateKey) {
  const referenceHash = crypto
    .createHash('sha256')
    .update(url)
    .digest('hex');

  const mark = await client.createMark({
    type: 1,  // URL
    reference: url,
    referenceHash: referenceHash,
    privateKey: privateKey
  });

  console.log(`Mark created: ${mark.txid}`);
  return mark;
}

// Mark a Nostr profile
async function markNostrProfile(pubkey, privateKey) {
  // Nostr pubkeys are already 32 bytes, use directly
  const mark = await client.createMark({
    type: 4,  // Nostr Profile
    referenceHash: pubkey,  // 64 hex chars
    privateKey: privateKey
  });

  return mark;
}

// Mark a document
async function markDocument(filePath, privateKey) {
  const fs = require('fs');
  const fileBuffer = fs.readFileSync(filePath);
  const referenceHash = crypto
    .createHash('sha256')
    .update(fileBuffer)
    .digest('hex');

  const mark = await client.createMark({
    type: 6,  // Document
    referenceHash: referenceHash,
    privateKey: privateKey
  });

  console.log(`Document marked: ${mark.txid}`);
  console.log(`Reference hash: ${referenceHash}`);
  return mark;
}
```

## Manual Mark Creation

For advanced users who want to create marks directly.

### 1. Build Mark Data

```javascript
function buildMarkData(type, referenceHash) {
  // Magic: "MRK" (0x4d524b)
  // Version: 0x01
  // Type: 0x01-0x09
  // Reference Hash: 32 bytes

  const data = Buffer.alloc(37);
  data.write('MRK', 0);
  data.writeUInt8(0x01, 3);  // Version
  data.writeUInt8(type, 4);   // Type
  Buffer.from(referenceHash, 'hex').copy(data, 5);

  return data;
}
```

### 2. Create OP_RETURN Output

```javascript
function createOpReturnScript(markData) {
  // OP_RETURN (0x6a) + PUSH 37 (0x25) + data
  const script = Buffer.alloc(39);
  script.writeUInt8(0x6a, 0);  // OP_RETURN
  script.writeUInt8(0x25, 1);  // Push 37 bytes
  markData.copy(script, 2);
  return script;
}
```

### 3. Build Transaction

```javascript
const bitcoin = require('bitcoinjs-lib');

function createMarkTransaction(utxo, markData, changeAddress, privateKey) {
  const network = bitcoin.networks.bitcoin; // Adjust for Bitmark

  const tx = new bitcoin.TransactionBuilder(network);

  // Add input
  tx.addInput(utxo.txid, utxo.vout);

  // Add OP_RETURN output
  const opReturn = createOpReturnScript(markData);
  tx.addOutput(opReturn, 0);

  // Add change output
  const fee = 10000;  // 0.0001 BTM
  const change = utxo.value - fee;
  tx.addOutput(changeAddress, change);

  // Sign
  const keyPair = bitcoin.ECPair.fromWIF(privateKey, network);
  tx.sign(0, keyPair);

  return tx.build().toHex();
}
```

### 4. Broadcast

```bash
bitmark-cli sendrawtransaction <hex>
```

Or via API:
```bash
curl -X POST http://localhost:3000/api/tx/broadcast \
  -H "Content-Type: application/json" \
  -d '{"hex": "<transaction-hex>"}'
```

## Storing References

Marks only store hashes on-chain. Store the original reference off-chain:

```bash
# Store reference for later lookup
curl -X POST http://localhost:3000/api/reference \
  -H "Content-Type: application/json" \
  -d '{
    "reference": "https://example.com/article",
    "hash": "8823a419..."
  }'

# Retrieve reference by hash
curl http://localhost:3000/api/reference/8823a419...
```

## Verifying Marks

### Find Marks by Hash

```bash
curl http://localhost:3000/api/marks?hash=8823a419...
```

### Verify Mark Exists

```javascript
async function verifyMark(reference) {
  const hash = crypto
    .createHash('sha256')
    .update(reference)
    .digest('hex');

  const marks = await client.getMarks({ hash });

  if (marks.length > 0) {
    console.log(`Reference marked ${marks.length} times`);
    console.log(`First marked at block ${marks[0].blockHeight}`);
    return true;
  }

  console.log('Reference not marked');
  return false;
}
```

## Best Practices

### Choosing Mark Amounts

| Content Value | Suggested Mark |
|---------------|----------------|
| Amusing comment | 0.001 BTM |
| Helpful article | 0.01 BTM |
| Valuable resource | 0.1 BTM |
| Life-changing | 1+ BTM |

### Before Marking

1. Verify content exists and is what you expect
2. Check if already marked (avoid duplicates)
3. Have sufficient balance for fee

### After Marking

1. Store the reference off-chain
2. Note the transaction ID for your records
3. Share the mark (builds both reputations)

## Common Issues

### "Insufficient funds"

Need at least mark amount + transaction fee (~0.001 BTM)

### "Reference too long"

Only the hash is stored on-chain. Long references are automatically hashed.

### "Invalid reference hash"

Ensure hash is 64 hex characters (32 bytes)

## See Also

- [MRK Protocol](/marking/mrk-protocol) - Technical specification
- [Use Cases](/marking/use-cases) - Application examples
- [API Documentation](/ecosystem/api) - Full API reference
