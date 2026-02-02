---
sidebar_position: 1
title: RPC API Reference
description: Complete JSON-RPC API reference for bitmarkd
---

# RPC API Reference

Complete reference for the Bitmark Core JSON-RPC interface.

## Connection

### Configuration

In `bitmark.conf`:
```ini
server=1
rpcuser=username
rpcpassword=password
rpcallowip=127.0.0.1
rpcport=9266
```

### Making Requests

```bash
# Using curl
curl -u username:password \
  -d '{"jsonrpc":"1.0","method":"getinfo","params":[]}' \
  http://127.0.0.1:9266/

# Using bitmark-cli
bitmark-cli <method> [params...]
```

## Blockchain Commands

### getblockchaininfo

Returns blockchain state information.

```bash
bitmark-cli getblockchaininfo
```

Response:
```json
{
  "chain": "main",
  "blocks": 500000,
  "headers": 500000,
  "bestblockhash": "0x1a2b3c...",
  "difficulty": 12345.678,
  "mediantime": 1705312000,
  "verificationprogress": 1.0,
  "chainwork": "0x..."
}
```

### getblock

Returns block data.

```bash
bitmark-cli getblock <hash> [verbosity]
```

| Parameter | Type | Description |
|-----------|------|-------------|
| hash | string | Block hash |
| verbosity | int | 0=hex, 1=json, 2=json+tx |

### getblockhash

Returns hash of block at height.

```bash
bitmark-cli getblockhash <height>
```

### getblockcount

Returns current block height.

```bash
bitmark-cli getblockcount
```

### getdifficulty

Returns current difficulty.

```bash
bitmark-cli getdifficulty
```

### getbestblockhash

Returns hash of best (tip) block.

```bash
bitmark-cli getbestblockhash
```

## Transaction Commands

### getrawtransaction

Returns raw transaction data.

```bash
bitmark-cli getrawtransaction <txid> [verbose]
```

### decoderawtransaction

Decodes a raw transaction hex.

```bash
bitmark-cli decoderawtransaction <hex>
```

### sendrawtransaction

Broadcasts a raw transaction.

```bash
bitmark-cli sendrawtransaction <hex>
```

### gettxout

Returns details about an unspent output.

```bash
bitmark-cli gettxout <txid> <vout> [include_mempool]
```

## Wallet Commands

### getbalance

Returns wallet balance.

```bash
bitmark-cli getbalance [account] [minconf]
```

### getnewaddress

Generates a new address.

```bash
bitmark-cli getnewaddress [label]
```

### getaddressesbyaccount

Returns addresses for an account.

```bash
bitmark-cli getaddressesbyaccount <account>
```

### sendtoaddress

Sends to an address.

```bash
bitmark-cli sendtoaddress <address> <amount> [comment] [comment_to]
```

### listtransactions

Lists recent transactions.

```bash
bitmark-cli listtransactions [account] [count] [skip]
```

### listunspent

Lists unspent outputs.

```bash
bitmark-cli listunspent [minconf] [maxconf] [addresses]
```

### signrawtransaction

Signs a raw transaction.

```bash
bitmark-cli signrawtransaction <hex> [prevtxs] [privkeys]
```

### dumpprivkey

Reveals private key for an address.

```bash
bitmark-cli dumpprivkey <address>
```

:::warning
This exposes the private key! Use with caution.
:::

### importprivkey

Imports a private key.

```bash
bitmark-cli importprivkey <privkey> [label] [rescan]
```

### walletpassphrase

Unlocks encrypted wallet.

```bash
bitmark-cli walletpassphrase <passphrase> <timeout>
```

### walletlock

Locks the wallet.

```bash
bitmark-cli walletlock
```

### encryptwallet

Encrypts the wallet.

```bash
bitmark-cli encryptwallet <passphrase>
```

### backupwallet

Creates wallet backup.

```bash
bitmark-cli backupwallet <destination>
```

## Mining Commands

### getmininginfo

Returns mining status.

```bash
bitmark-cli getmininginfo
```

Response:
```json
{
  "blocks": 500000,
  "currentblocksize": 1000,
  "currentblocktx": 0,
  "difficulty": 12345.678,
  "networkhashps": 1000000,
  "pooledtx": 5,
  "generate": false,
  "genproclimit": -1
}
```

### setgenerate

Enables/disables mining.

```bash
bitmark-cli setgenerate <generate> [genproclimit]
```

| Parameter | Type | Description |
|-----------|------|-------------|
| generate | bool | true to enable |
| genproclimit | int | Thread count (-1 = all) |

### setminingalgo

Sets mining algorithm.

```bash
bitmark-cli setminingalgo <algo>
```

| Algo | Algorithm |
|------|-----------|
| 0 | SCRYPT |
| 1 | SHA256D |
| 2 | YESCRYPT |
| 3 | ARGON2D |
| 4 | X17 |
| 5 | LYRA2REv2 |
| 6 | EQUIHASH |
| 7 | CRYPTONIGHT |

### getnetworkhashps

Returns estimated network hash rate.

```bash
bitmark-cli getnetworkhashps [blocks] [height]
```

### getblocktemplate

Returns data for constructing a block.

```bash
bitmark-cli getblocktemplate [params]
```

### submitblock

Submits a new block.

```bash
bitmark-cli submitblock <hex>
```

## Network Commands

### getnetworkinfo

Returns network information.

```bash
bitmark-cli getnetworkinfo
```

### getpeerinfo

Returns connected peer information.

```bash
bitmark-cli getpeerinfo
```

### getconnectioncount

Returns number of connections.

```bash
bitmark-cli getconnectioncount
```

### addnode

Attempts to add a peer.

```bash
bitmark-cli addnode <node> <add|remove|onetry>
```

### disconnectnode

Disconnects a peer.

```bash
bitmark-cli disconnectnode <node>
```

### ping

Pings all peers.

```bash
bitmark-cli ping
```

## Utility Commands

### validateaddress

Validates an address.

```bash
bitmark-cli validateaddress <address>
```

### createmultisig

Creates a multisig address.

```bash
bitmark-cli createmultisig <nrequired> <keys>
```

### estimatefee

Estimates transaction fee.

```bash
bitmark-cli estimatefee <nblocks>
```

### signmessage

Signs a message with address.

```bash
bitmark-cli signmessage <address> <message>
```

### verifymessage

Verifies a signed message.

```bash
bitmark-cli verifymessage <address> <signature> <message>
```

## Control Commands

### help

Lists commands or gets help.

```bash
bitmark-cli help [command]
```

### stop

Stops the daemon.

```bash
bitmark-cli stop
```

### getinfo

Returns general information (deprecated, use specific commands).

```bash
bitmark-cli getinfo
```

## Error Codes

| Code | Meaning |
|------|---------|
| -1 | Miscellaneous error |
| -3 | Invalid parameter |
| -5 | Invalid address |
| -6 | Insufficient funds |
| -13 | Wallet unlock needed |
| -14 | Wrong passphrase |
| -25 | Transaction rejected |
| -26 | Already in chain |

## See Also

- [REST API Reference](/reference/rest-api) - HTTP REST API
- [API Guide](/ecosystem/api) - Integration guide
