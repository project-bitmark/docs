---
sidebar_position: 2
title: Block Explorers
description: Bitmark block explorers and blockchain viewing tools
---

# Block Explorers

Block explorers provide a web interface to view Bitmark blockchain data.

## Available Explorers

### Chainz Explorer

**URL**: [chainz.cryptoid.info/marks/](https://chainz.cryptoid.info/marks/)

The primary public explorer for Bitmark.

**Features**:
- Block browsing
- Transaction lookup
- Address balance checking
- Rich list
- Network statistics
- API access

### OpenMarks Explorer

**URL**: [explorer.bitmark.co](http://explorer.bitmark.co)

Community-run explorer with additional features.

**Features**:
- Block and transaction viewing
- Address lookup
- Testnet support
- Network visualization

### Testnet Explorer

**URL**: [explorer.bitmark.co/testnet](http://explorer.bitmark.co/testnet)

For testing and development purposes.

## Explorer Features

### Block Information

View details about any block:

```
Block #500000
├── Hash: 0x1a2b3c...
├── Previous Hash: 0x4d5e6f...
├── Merkle Root: 0x7g8h9i...
├── Time: 2024-01-15 10:30:42
├── Difficulty: 12345.678
├── Algorithm: SCRYPT
├── Transactions: 5
└── Size: 1,234 bytes
```

### Transaction Details

```
Transaction: abc123...
├── Status: Confirmed (100 confirmations)
├── Block: #500000
├── Fee: 0.001 BTM
├── Inputs:
│   └── bKxE7v... (1.5 BTM)
├── Outputs:
│   ├── bJm8Nq... (1.0 BTM)
│   └── bKxE7v... (0.499 BTM) [change]
└── OP_RETURN: <mark data if present>
```

### Address View

```
Address: bKxE7vRhRPMs...
├── Balance: 10.5 BTM
├── Total Received: 100.0 BTM
├── Total Sent: 89.5 BTM
├── Transaction Count: 42
└── First Seen: Block #123456
```

## Using the API

### Chainz API

```bash
# Get address balance
curl "https://chainz.cryptoid.info/marks/api.dws?q=getbalance&a=<address>"

# Get block info
curl "https://chainz.cryptoid.info/marks/api.dws?q=getblockcount"

# Get transaction
curl "https://chainz.cryptoid.info/marks/api.dws?q=txinfo&t=<txid>"
```

### Common Queries

| Query | Endpoint |
|-------|----------|
| Block count | `?q=getblockcount` |
| Difficulty | `?q=getdifficulty` |
| Address balance | `?q=getbalance&a=<addr>` |
| TX info | `?q=txinfo&t=<txid>` |
| Unspent outputs | `?q=unspent&active=<addr>` |

## Running Your Own Explorer

### Using bitmark-api

The [bitmark-api](https://github.com/project-bitmark/bitmark-api) project provides a local explorer with REST API.

```bash
# Clone and install
git clone https://github.com/project-bitmark/bitmark-api.git
cd bitmark-api
npm install

# Configure
cp .env.example .env
# Edit .env with your bitmarkd RPC credentials

# Start
npm start
```

**Endpoints**:
- `http://localhost:3000/` - Web interface
- `http://localhost:3000/api/status` - Sync status
- `http://localhost:3000/api/block/:height` - Block info
- `http://localhost:3000/api/tx/:txid` - Transaction info

### System Requirements

| Component | Requirement |
|-----------|-------------|
| Node.js | v16+ |
| SQLite | Built-in |
| bitmarkd | Running with txindex=1 |
| Storage | 1 GB+ |

## Explorer Data

### Network Statistics

Most explorers provide:

- **Block height**: Current chain height
- **Difficulty**: Per-algorithm difficulty
- **Hashrate**: Estimated network hashrate
- **Supply**: Circulating supply
- **Transactions**: Transaction volume

### Rich List

View addresses with largest balances:

```
Rank | Address        | Balance    | % Supply
-----|----------------|------------|----------
1    | bTop1Address.. | 500,000    | 1.8%
2    | bTop2Address.. | 350,000    | 1.3%
3    | bTop3Address.. | 200,000    | 0.7%
```

## Marks on Explorers

### Viewing Mark Transactions

Mark transactions are visible on explorers as OP_RETURN data:

```
OP_RETURN: 4d524b01018823a419a50848d314c84eb556cdf8812c212a2b225ef1e38b9855ea84faa9e9
           │    │ │ │
           │    │ │ └─ Reference hash (32 bytes)
           │    │ └─── Type: 0x01 (URL)
           │    └───── Version: 0x01
           └────────── Magic: "MRK"
```

### Searching for Marks

On bitmark-api explorer:

```
GET /api/marks?hash=<reference_hash>
GET /api/marks?type=1&limit=100
```

## Privacy Considerations

When using public explorers:

1. **IP logging**: Your IP may be logged
2. **Address linking**: Multiple lookups can be correlated
3. **Timing analysis**: Access patterns are visible

For privacy-sensitive operations:
- Run your own explorer
- Use Tor browser
- Avoid repeated address lookups

## See Also

- [REST API Reference](/reference/rest-api) - API documentation
- [API Setup Guide](/ecosystem/api) - Running your own API
- [MRK Protocol](/marking/mrk-protocol) - Mark data format
