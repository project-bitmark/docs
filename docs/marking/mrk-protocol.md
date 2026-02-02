---
sidebar_position: 3
title: MRK Protocol Specification
description: Complete technical specification of the MRK marking protocol
---

# MRK Protocol Specification v1

## Overview

MRK (Mark) is a protocol for timestamping and attributing content references on the Bitmark blockchain using OP_RETURN transactions.

## Transaction Structure

A mark transaction is a standard Bitmark transaction with:
- **Input(s)**: UTXO(s) controlled by the marker
- **Output 0**: OP_RETURN containing mark data
- **Output 1**: Change back to marker (optional recipient for type 2)

## OP_RETURN Format

```
OP_RETURN <push_op> <mark_data>
```

| Field | Size | Description |
|-------|------|-------------|
| OP_RETURN | 1 byte | `0x6a` |
| Push opcode | 1 byte | `0x25` (37 decimal) |
| Mark data | 37 bytes | See below |

## Mark Data Structure (37 bytes)

| Offset | Size | Field | Description |
|--------|------|-------|-------------|
| 0-2 | 3 bytes | Magic | `0x4d524b` ("MRK" in ASCII) |
| 3 | 1 byte | Version | Protocol version (`0x01`) |
| 4 | 1 byte | Type | Mark type (see below) |
| 5-36 | 32 bytes | Reference Hash | SHA256 of the reference |

### Hex Layout

```
4d524b   01   01   <32-byte-sha256-hash>
│││││    │    │    └── Reference hash
│││││    │    └─────── Type
│││││    └──────────── Version
└────────────────────── Magic ("MRK")
```

## Mark Types

| Code | Name | Reference Format | Description |
|------|------|------------------|-------------|
| `0x01` | URL | SHA256(UTF-8 string) | Web URL (article, video, post) |
| `0x02` | Address | SHA256(UTF-8 string) | Bitmark address (creator attribution) |
| `0x03` | Content | SHA256(UTF-8 string) | Content identifier or hash |
| `0x04` | Nostr Profile | Raw 32 bytes | Nostr pubkey (hex, not npub) |
| `0x05` | Git Commit | SHA256(UTF-8 string) | Git commit hash or repo URL |
| `0x06` | Document | SHA256(file bytes) | Document proof of existence |
| `0x07` | Timestamp | SHA256(file bytes) | Cross-chain timestamp (OTS compatible) |
| `0x08` | Nostr Event | Raw 32 bytes | Nostr event id (hex, not nevent) |
| `0x09` | URI | SHA256(UTF-8 string) | Linked data identifier (person, place, thing) |

### Type 0x04: Nostr Profile

For Nostr Profile marks, the reference hash is the raw 32-byte pubkey (64 hex characters):

```javascript
reference_hash = pubkey  // Already 32 bytes, no hashing needed
```

This marks a person/identity on Nostr. The pubkey is stored directly since it's already the correct size.

### Type 0x08: Nostr Event

For Nostr Event marks, the reference hash is the raw 32-byte event id (64 hex characters):

```javascript
reference_hash = event_id  // Already 32 bytes, no hashing needed
```

This marks a specific note/event on Nostr. The event id is stored directly since it's already the correct size.

### Type 0x06: Document

For Document marks, the reference hash is computed directly from the file bytes:

```javascript
reference_hash = SHA256(file_bytes)
```

This enables proof-of-existence for documents, prior art claims, and timestamping without revealing content.

### Type 0x07: Timestamp

For Timestamp marks, the reference hash is the same SHA256 hash used by external timestamping services (e.g., OpenTimestamps):

```javascript
reference_hash = SHA256(file_bytes)  // Same hash as OTS input
```

This enables cross-chain attestation: the same document hash can be timestamped via OpenTimestamps (Bitcoin) and marked on Bitmark, creating dual-chain proof of existence.

## Reference Hash Computation

The reference hash is computed as:

```javascript
reference_hash = SHA256(reference_string)
```

Where `reference_string` is the UTF-8 encoded reference (URL, address, etc.).

### Example

```javascript
reference = "https://example.com/article"
reference_bytes = UTF8_ENCODE(reference)
reference_hash = SHA256(reference_bytes)
// Result: 32 bytes
```

## Complete OP_RETURN Example

For marking the URL `https://solid-chat.com/`:

```
Reference: "https://solid-chat.com/"
SHA256:    8823a419a50848d314c84eb556cdf8812c212a2b225ef1e38b9855ea84faa9e9

Mark data (hex):
4d524b 01 01 8823a419a50848d314c84eb556cdf8812c212a2b225ef1e38b9855ea84faa9e9
│      │  │  └── SHA256 hash of reference
│      │  └───── Type: 0x01 (URL)
│      └──────── Version: 0x01
└─────────────── Magic: "MRK"

Full OP_RETURN script (hex):
6a 25 4d524b01018823a419a50848d314c84eb556cdf8812c212a2b225ef1e38b9855ea84faa9e9
│  │  └── Mark data (37 bytes)
│  └───── Push opcode (37 = 0x25)
└──────── OP_RETURN (0x6a)
```

## Mark Weight (Fee)

The transaction fee serves as the "mark weight" - a measure of commitment to the mark. Higher fees indicate stronger endorsement.

**Recommended minimum**: `0.01 BTM`

## Verification

To verify a mark:

1. Parse the OP_RETURN output
2. Verify magic bytes are `0x4d524b` ("MRK")
3. Check version is supported (`0x01`)
4. Extract type and reference hash
5. If original reference is known, verify: `SHA256(reference) == reference_hash`

## Reference Storage

Since the blockchain only stores the hash, the original reference should be stored off-chain. The API provides endpoints:

- `POST /reference` - Store reference with its hash
- `GET /reference/:hash` - Retrieve reference by hash

## Transaction Example

```
Version: 1
Inputs:
  - txid: 610695c4de17c289aaccbbdf7f6cb90a697b45a88de89abda639eeb6e1e6e51b
    vout: 0
    scriptSig: <signature> <pubkey>

Outputs:
  - value: 0
    scriptPubKey: OP_RETURN <mark_data>

  - value: 1.99 BTM
    scriptPubKey: OP_DUP OP_HASH160 <pubkey_hash> OP_EQUALVERIFY OP_CHECKSIG

Locktime: 0
```

## Implementation Notes

### Creating a Mark

1. Select UTXO(s) with sufficient value
2. Compute reference hash: `SHA256(UTF8(reference))`
3. Build mark data: `"MRK" || version || type || hash`
4. Create OP_RETURN output: `0x6a || 0x25 || mark_data`
5. Create change output (input value - fee)
6. Sign and broadcast transaction

### Parsing a Mark

```javascript
function parseMark(opReturnHex) {
  // Skip OP_RETURN (6a) and push opcode (25)
  const data = opReturnHex.slice(4); // Remove "6a25"

  // Check magic
  if (!data.startsWith('4d524b')) return null;

  // Parse fields
  const version = parseInt(data.slice(6, 8), 16);
  const type = parseInt(data.slice(8, 10), 16);
  const referenceHash = data.slice(10, 74);

  return { version, type, referenceHash };
}
```

## Version History

| Version | Description |
|---------|-------------|
| 0x01 | URL, Address, Content, Nostr Profile, Git Commit, Document, Timestamp, Nostr Event, URI types |

## Future Considerations

- **Type extensions**: New reference types can be added with new type codes
- **Version upgrades**: Breaking changes require version increment
- **Multi-mark**: Multiple marks in single transaction (multiple OP_RETURNs)
- **Recipient marks**: Type 2 (Address) can include recipient output for attribution payments
