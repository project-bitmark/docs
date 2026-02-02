---
sidebar_position: 2
title: REST API Reference
description: REST API reference for bitmark-api
---

# REST API Reference

Reference for the bitmark-api HTTP REST interface.

## Base URL

```
http://localhost:3000/api
```

## Authentication

Currently no authentication required for read operations. Write operations may require a private key in the request body.

## Status

### GET /status

Returns sync status.

**Response**:
```json
{
  "height": 500000,
  "syncedTo": 500000,
  "syncing": false,
  "bestBlockHash": "0x1a2b3c...",
  "network": "mainnet"
}
```

## Blocks

### GET /block/:height

Returns block by height.

**Parameters**:
| Name | Type | Description |
|------|------|-------------|
| height | int | Block height |

**Response**:
```json
{
  "hash": "0x1a2b3c...",
  "height": 500000,
  "version": 4,
  "previousHash": "0x4d5e6f...",
  "merkleRoot": "0x7g8h9i...",
  "time": 1705312000,
  "bits": "1d00ffff",
  "nonce": 12345,
  "algorithm": "SCRYPT",
  "difficulty": 12345.678,
  "txCount": 5,
  "size": 1234
}
```

### GET /block/:hash

Returns block by hash.

### GET /blocks/latest

Returns latest blocks.

**Query Parameters**:
| Name | Type | Default | Description |
|------|------|---------|-------------|
| limit | int | 10 | Number of blocks |

## Transactions

### GET /tx/:txid

Returns transaction details.

**Response**:
```json
{
  "txid": "abc123...",
  "blockHeight": 500000,
  "blockHash": "0x1a2b3c...",
  "confirmations": 100,
  "time": 1705312000,
  "size": 250,
  "fee": 1000,
  "inputs": [
    {
      "txid": "prev123...",
      "vout": 0,
      "address": "bSender...",
      "value": 100000000
    }
  ],
  "outputs": [
    {
      "n": 0,
      "address": "bRecipient...",
      "value": 90000000
    },
    {
      "n": 1,
      "address": "bSender...",
      "value": 9999000
    }
  ]
}
```

### POST /tx/broadcast

Broadcasts a raw transaction.

**Request Body**:
```json
{
  "hex": "0100000001..."
}
```

**Response**:
```json
{
  "txid": "abc123..."
}
```

### GET /tx/:txid/raw

Returns raw transaction hex.

## Addresses

### GET /address/:address

Returns address information.

**Response**:
```json
{
  "address": "bKxE7vRhRPMs...",
  "balance": 1000000000,
  "received": 5000000000,
  "sent": 4000000000,
  "txCount": 42,
  "unconfirmedBalance": 0
}
```

### GET /address/:address/balance

Returns balance only.

**Response**:
```json
{
  "balance": 1000000000,
  "unconfirmed": 0
}
```

### GET /address/:address/utxos

Returns unspent outputs.

**Response**:
```json
{
  "utxos": [
    {
      "txid": "abc123...",
      "vout": 0,
      "value": 500000000,
      "confirmations": 100,
      "scriptPubKey": "76a914..."
    },
    {
      "txid": "def456...",
      "vout": 1,
      "value": 500000000,
      "confirmations": 50,
      "scriptPubKey": "76a914..."
    }
  ]
}
```

### GET /address/:address/txs

Returns transaction history.

**Query Parameters**:
| Name | Type | Default | Description |
|------|------|---------|-------------|
| limit | int | 50 | Max transactions |
| offset | int | 0 | Skip transactions |

**Response**:
```json
{
  "txs": [
    {
      "txid": "abc123...",
      "blockHeight": 500000,
      "time": 1705312000,
      "value": 100000000,
      "direction": "in"
    }
  ],
  "total": 42
}
```

## Marks

### GET /marks

Returns marks matching criteria.

**Query Parameters**:
| Name | Type | Description |
|------|------|-------------|
| hash | string | Reference hash |
| type | int | Mark type (1-9) |
| limit | int | Max results |
| offset | int | Skip results |

**Response**:
```json
{
  "marks": [
    {
      "txid": "abc123...",
      "blockHeight": 500000,
      "time": 1705312000,
      "version": 1,
      "type": 1,
      "referenceHash": "8823a419...",
      "fee": 1000000
    }
  ],
  "total": 5
}
```

### POST /mark

Creates a new mark.

**Request Body**:
```json
{
  "type": 1,
  "reference": "https://example.com/article",
  "privateKey": "WIF-encoded-key"
}
```

Or with pre-computed hash:
```json
{
  "type": 6,
  "referenceHash": "8823a419...",
  "privateKey": "WIF-encoded-key"
}
```

**Response**:
```json
{
  "txid": "abc123...",
  "referenceHash": "8823a419...",
  "fee": 1000000
}
```

### GET /mark/:txid

Returns mark details.

## References

### POST /reference

Stores a reference.

**Request Body**:
```json
{
  "reference": "https://example.com/article",
  "hash": "8823a419..."
}
```

**Response**:
```json
{
  "success": true
}
```

### GET /reference/:hash

Retrieves stored reference.

**Response**:
```json
{
  "reference": "https://example.com/article",
  "hash": "8823a419...",
  "stored": 1705312000
}
```

## Network

### GET /network/info

Returns network information.

**Response**:
```json
{
  "network": "mainnet",
  "connections": 8,
  "version": "0.9.7.4",
  "protocolVersion": 70015
}
```

### GET /network/difficulty

Returns difficulty by algorithm.

**Response**:
```json
{
  "scrypt": 12345.678,
  "sha256d": 9999999.123,
  "yescrypt": 1234.567,
  "argon2d": 567.890,
  "x17": 8901.234,
  "lyra2rev2": 3456.789,
  "equihash": 23456.789,
  "cryptonight": 7890.123
}
```

## Validation

### GET /validate/:address

Validates an address.

**Response**:
```json
{
  "valid": true,
  "address": "bKxE7vRhRPMs...",
  "network": "mainnet"
}
```

## Web Interface

### GET /

Serves the block explorer web interface.

### GET /block/:height

Block detail page.

### GET /tx/:txid

Transaction detail page.

### GET /address/:address

Address detail page.

## Error Responses

```json
{
  "error": true,
  "message": "Description of error",
  "code": "ERROR_CODE"
}
```

| Code | HTTP Status | Description |
|------|-------------|-------------|
| NOT_FOUND | 404 | Resource not found |
| INVALID_ADDRESS | 400 | Invalid address format |
| INVALID_TX | 400 | Invalid transaction |
| BROADCAST_FAILED | 500 | Failed to broadcast |
| INTERNAL_ERROR | 500 | Server error |

## Rate Limits

Default limits (configurable):

| Endpoint | Limit |
|----------|-------|
| Read operations | 100/minute |
| Write operations | 10/minute |

## CORS

Enabled for all origins by default. Configure in `.env`:

```
CORS_ORIGIN=https://yourdomain.com
```

## See Also

- [RPC API Reference](/reference/rpc-api) - Node RPC API
- [API Guide](/ecosystem/api) - Integration guide
- [Creating Marks](/guides/creating-marks) - Mark creation guide
