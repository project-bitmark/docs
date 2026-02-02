---
sidebar_position: 4
title: Glossary
description: Definitions of key terms used in Bitmark
---

# Glossary

Definitions of key terms used in Bitmark documentation.

## A

### Address
A Base58-encoded identifier used to receive Bitmark. Mainnet addresses start with `b`, testnet with `u`.

### Algorithm
A specific hash function used for proof-of-work mining. Bitmark supports 8 algorithms.

### Argon2d
One of the 8 mining algorithms. Memory-hard, optimized for CPU mining. Won the Password Hashing Competition.

### AuxPow (Auxiliary Proof of Work)
Merge mining mechanism that allows Bitmark to be mined simultaneously with compatible parent chains.

## B

### BIP (Bitmark Improvement Proposal)
A formal document describing new features or changes to Bitmark. Modeled after Bitcoin's BIP system.

### Block
A container of transactions, cryptographically linked to form the blockchain.

### Block Header
The 80-byte structure at the start of a block containing version, previous hash, merkle root, timestamp, difficulty bits, and nonce.

### Block Reward
The amount of new MARKS created with each block. Currently ~2.5 MARKS per block (varies by emission schedule).

### Blockchain
A chain of blocks where each block references the hash of the previous block.

### BTM
Common ticker symbol for Bitmark currency.

## C

### Chain ID
Unique identifier (91 for Bitmark) used in merge mining to distinguish Bitmark blocks.

### Coinbase Transaction
The first transaction in each block that creates new coins and pays the miner.

### Confirmation
The number of blocks mined after a transaction's block. More confirmations = more security.

### Consensus
Agreement among nodes on the valid blockchain state.

### CryptoNight
One of the 8 mining algorithms. Memory-hard, originally from Monero.

## D

### Difficulty
A measure of how hard it is to find a valid block hash. Adjusts to maintain 2-minute average block time.

### DGWv3 (Dark Gravity Wave v3)
Bitmark's difficulty adjustment algorithm. Adjusts every block based on the last 25 same-algorithm blocks.

## E

### Emission
The creation of new coins through mining.

### Equihash
One of the 8 mining algorithms. Memory-hard, based on the generalized birthday problem.

## F

### Fee
Amount paid to miners to include a transaction in a block.

### Fork
A divergence in the blockchain. Can be soft (backward compatible) or hard (not compatible).

### Full Node
A node that downloads and validates the entire blockchain.

## G

### Genesis Block
The first block in the blockchain (block 0). Created July 13, 2014.

## H

### Halving
Reduction of block reward by 50%. Bitmark also uses quartering (25% reduction).

### Hash
The output of a cryptographic hash function. Used for block identification and proof-of-work.

### Hashrate
The number of hashes computed per second by miners.

## L

### Light Wallet
A wallet that doesn't download the full blockchain (e.g., Electrum).

### Lyra2REv2
One of the 8 mining algorithms. Memory-hard, GPU-optimized.

## M

### Mark
A transaction that endorses content by recording a reference hash and transferring value.

### Marking
The system of using marks to create reputation and transfer value.

### Markbit (MB)
The smallest unit of Bitmark (10⁻⁸ MARKS = 1 satoshi).

### Merge Mining
Mining multiple blockchains simultaneously using the same proof-of-work.

### Mempool
Pool of unconfirmed transactions waiting to be included in blocks.

### Merkle Root
A hash of all transaction hashes in a block, stored in the block header.

### mPoW (Multi-algorithm Proof of Work)
Bitmark's system supporting 8 different mining algorithms.

### MRK Protocol
The specification for creating mark transactions using OP_RETURN.

## N

### Node
A computer running Bitmark software, participating in the network.

### Nonce
A number varied by miners to find a valid block hash.

### Nostr
A decentralized protocol for social networking. Bitmark marks can reference Nostr profiles and events.

## O

### OP_RETURN
Bitcoin script opcode that allows embedding arbitrary data in transactions. Used for marks.

### Orphan Block
A valid block that isn't part of the main chain.

## P

### P2PKH (Pay to Public Key Hash)
Standard transaction type that pays to an address.

### Private Key
Secret number that proves ownership of an address and allows spending.

### Proof of Work (PoW)
Consensus mechanism requiring computational work to create blocks.

### Public Key
Derived from private key, used to verify signatures and generate addresses.

## Q

### Quartering
Reduction of block reward by 25%. Used between halvings for smoother emission.

## R

### Reference
The content being marked (URL, address, etc.).

### Reference Hash
SHA256 hash of the reference, stored in mark transactions.

### Resurrector
Difficulty mechanism that reduces difficulty if an algorithm has no blocks for 160+ minutes.

### RPC (Remote Procedure Call)
Interface for programmatic interaction with bitmarkd.

## S

### Satoshi
The smallest unit of Bitmark (0.00000001 MARKS).

### Scaling Factor
Subsidy Scaling Factor (SSF) - adjusts block rewards based on hashrate.

### Scrypt
One of the 8 mining algorithms. Memory-hard, originally from Litecoin.

### SHA256D
One of the 8 mining algorithms. Double SHA256, same as Bitcoin.

### Signature
Cryptographic proof that a transaction was authorized by the private key owner.

### Surge Protector
Difficulty mechanism that reduces difficulty after 9 consecutive same-algorithm blocks.

## T

### Testnet
Test network with worthless coins for development and testing.

### Transaction (Tx)
Transfer of value from inputs to outputs.

### TXID
Transaction identifier - the hash of a transaction.

## U

### UTXO (Unspent Transaction Output)
An output that hasn't been spent yet. UTXOs are consumed as inputs to new transactions.

## V

### Validation
Process of checking that blocks and transactions follow consensus rules.

### Version
Field in block header indicating protocol version and features.

## W

### Wallet
Software for managing addresses, private keys, and creating transactions.

### Weight
Algorithm-specific multiplier for difficulty normalization.

## X

### X17
One of the 8 mining algorithms. Chains 17 different hash functions.

## Y

### Yescrypt
One of the 8 mining algorithms. Memory-hard, CPU-optimized.
