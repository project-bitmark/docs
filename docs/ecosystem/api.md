---
sidebar_position: 4
title: API
description: Bitmark API services and integration
---

# Bitmark API

Multiple APIs are available for integrating with Bitmark.

## API Options

| API | Type | Use Case |
|-----|------|----------|
| RPC API | JSON-RPC | Node operations, wallet |
| REST API | HTTP REST | Web apps, explorers |
| ElectrumX | Stratum | Light wallets |

## bitmark-api (REST)

A modern REST API with blockchain indexer.

### Repository

[github.com/project-bitmark/bitmark-api](https://github.com/project-bitmark/bitmark-api)

### Quick Start

```bash
# Clone
git clone https://github.com/project-bitmark/bitmark-api.git
cd bitmark-api

# Install
npm install

# Configure
cp .env.example .env
# Edit .env:
# RPC_USER=bitmarkrpc
# RPC_PASSWORD=yourpassword
# RPC_HOST=127.0.0.1
# RPC_PORT=9266

# Start
npm start
```

### Endpoints

#### Status

```bash
# Sync status
GET /api/status
```

Response:
```json
{
  "height": 500000,
  "syncedTo": 500000,
  "syncing": false,
  "bestBlockHash": "0x1a2b3c..."
}
```

#### Blocks

```bash
# Get block by height
GET /api/block/:height

# Get block by hash
GET /api/block/:hash
```

#### Transactions

```bash
# Get transaction
GET /api/tx/:txid

# Broadcast transaction
POST /api/tx/broadcast
Content-Type: application/json
{"hex": "<raw_transaction>"}
```

#### Addresses

```bash
# Get address info
GET /api/address/:address

# Get UTXOs
GET /api/address/:address/utxos

# Get balance
GET /api/address/:address/balance

# Get transaction history
GET /api/address/:address/txs
```

#### Marks

```bash
# Get marks by hash
GET /api/marks?hash=<reference_hash>

# Get marks by type
GET /api/marks?type=1

# Create mark
POST /api/mark
Content-Type: application/json
{
  "type": 1,
  "reference": "https://example.com/article"
}
```

#### References

```bash
# Store reference
POST /api/reference
Content-Type: application/json
{
  "reference": "https://example.com/article",
  "hash": "8823a419..."
}

# Get reference
GET /api/reference/:hash
```

## RPC API

Direct JSON-RPC interface to bitmarkd.

### Configuration

In `bitmark.conf`:
```ini
server=1
rpcuser=bitmarkrpc
rpcpassword=yourpassword
rpcallowip=127.0.0.1
rpcport=9266
```

### Making Requests

```bash
# Using curl
curl -u bitmarkrpc:yourpassword \
  -d '{"jsonrpc":"1.0","method":"getinfo","params":[]}' \
  http://127.0.0.1:9266/

# Using bitmark-cli
bitmark-cli getinfo
```

### Common RPC Methods

#### Blockchain

| Method | Description |
|--------|-------------|
| `getblockchaininfo` | Chain status |
| `getblock` | Block details |
| `getblockhash` | Hash by height |
| `getblockcount` | Current height |

#### Wallet

| Method | Description |
|--------|-------------|
| `getbalance` | Wallet balance |
| `getnewaddress` | Generate address |
| `sendtoaddress` | Send coins |
| `listtransactions` | Transaction list |

#### Network

| Method | Description |
|--------|-------------|
| `getnetworkinfo` | Network status |
| `getpeerinfo` | Connected peers |
| `getconnectioncount` | Peer count |

#### Mining

| Method | Description |
|--------|-------------|
| `getmininginfo` | Mining status |
| `setgenerate` | Start/stop mining |
| `setminingalgo` | Set algorithm |

### Example Responses

```bash
# getblockchaininfo
{
  "chain": "main",
  "blocks": 500000,
  "headers": 500000,
  "bestblockhash": "0x1a2b3c...",
  "difficulty": 12345.678,
  "mediantime": 1705312000,
  "verificationprogress": 1.0
}
```

## ElectrumX Protocol

For light wallet integrations.

### Server

[github.com/project-bitmark/electrumx-bitmark](https://github.com/project-bitmark/electrumx-bitmark)

### Connection

```python
import electrumx_client

client = electrumx_client.Client("electrumx.bitmark.co:50002")

# Get address balance
balance = client.blockchain_scripthash_get_balance(scripthash)

# Get transaction history
history = client.blockchain_scripthash_get_history(scripthash)
```

### Methods

| Method | Description |
|--------|-------------|
| `blockchain.scripthash.get_balance` | Address balance |
| `blockchain.scripthash.get_history` | Transaction history |
| `blockchain.scripthash.listunspent` | UTXOs |
| `blockchain.transaction.get` | Raw transaction |
| `blockchain.transaction.broadcast` | Broadcast tx |

## Code Examples

### Node.js

```javascript
const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
});

// Get balance
async function getBalance(address) {
  const res = await api.get(`/address/${address}/balance`);
  return res.data.balance;
}

// Send transaction
async function broadcast(hex) {
  const res = await api.post('/tx/broadcast', { hex });
  return res.data.txid;
}
```

### Python

```python
import requests

API_URL = "http://localhost:3000/api"

def get_balance(address):
    r = requests.get(f"{API_URL}/address/{address}/balance")
    return r.json()["balance"]

def broadcast_tx(hex_tx):
    r = requests.post(f"{API_URL}/tx/broadcast", json={"hex": hex_tx})
    return r.json()["txid"]
```

### JavaScript (Browser)

```javascript
async function getMarks(hash) {
  const response = await fetch(
    `https://api.bitmark.co/api/marks?hash=${hash}`
  );
  return await response.json();
}
```

## Rate Limits

Public APIs may have rate limits:

| Endpoint | Limit |
|----------|-------|
| Status | 100/min |
| Block | 60/min |
| Address | 30/min |
| Broadcast | 10/min |

For higher limits, run your own API instance.

## See Also

- [RPC API Reference](/reference/rpc-api) - Full RPC documentation
- [REST API Reference](/reference/rest-api) - Full REST documentation
- [Creating Marks](/guides/creating-marks) - Using the mark API
