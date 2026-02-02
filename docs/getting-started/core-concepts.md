---
sidebar_position: 4
title: Core Concepts
description: Understand the fundamental concepts of Bitmark
---

# Core Concepts

This page explains the fundamental concepts behind Bitmark.

## Blockchain Basics

### Blocks

Bitmark uses a blockchain, a chain of cryptographically linked blocks containing transactions. Each block:

- Contains a set of verified transactions
- Links to the previous block via its hash
- Is secured by proof-of-work

**Block Time**: Bitmark targets a **2-minute** average block time, providing faster confirmations than Bitcoin (10 min) while maintaining network stability.

### Transactions

Transactions move MARKS between addresses. Each transaction:

- Has inputs (source of funds)
- Has outputs (destination of funds)
- Is signed with the sender's private key
- Pays a small fee to miners

### Addresses

Bitmark addresses are Base58-encoded identifiers:

- **Mainnet**: Start with `b` (prefix 85)
- **Testnet**: Start with `u` (prefix 130)

Example: `bKxE7vRhRPMsda...`

## Multi-Algorithm Proof of Work

Unlike most cryptocurrencies that use a single mining algorithm, Bitmark supports **eight algorithms** simultaneously.

### Why Multi-Algo?

1. **Decentralization**: Different hardware types can participate
2. **Security**: Attackers must control majority of ALL algorithms
3. **Accessibility**: CPU, GPU, and ASIC miners all welcome
4. **Resilience**: If one algorithm is compromised, others continue

### The Eight Algorithms

```
┌─────────────────────────────────────────────────────────────┐
│                    BITMARK ALGORITHMS                       │
├─────────────┬─────────────┬─────────────┬──────────────────┤
│   SCRYPT    │   SHA256D   │  YESCRYPT   │     ARGON2D      │
│  (ASIC/GPU) │   (ASIC)    │  (CPU/GPU)  │      (CPU)       │
├─────────────┼─────────────┼─────────────┼──────────────────┤
│     X17     │ LYRA2REv2   │  EQUIHASH   │   CRYPTONIGHT    │
│    (GPU)    │    (GPU)    │ (GPU/ASIC)  │    (CPU/GPU)     │
└─────────────┴─────────────┴─────────────┴──────────────────┘
```

Each algorithm:
- Has independent difficulty adjustment
- Targets 16-minute intervals (8 algos × 16 min ÷ 8 = 2 min average)
- Contributes 1/8 of the total coin emission

## Difficulty Adjustment

Bitmark uses **Dark Gravity Wave v3 (DGWv3)** for difficulty adjustment, customized for multi-algorithm use.

### Key Features

- **Per-Block Adjustment**: Difficulty adjusts every block for each algorithm
- **25-Block Window**: Looks at last 25 blocks of the same algorithm
- **Responsive**: Quickly adapts to hashrate changes

### Special Mechanisms

**Surge Protector**: Prevents mining dominance
- Triggers after 9 consecutive blocks from same algorithm
- Divides difficulty by 3
- Discourages burst mining

**Resurrector**: Keeps algorithms viable
- Triggers if algorithm halts for >160 minutes
- Reduces difficulty proportionally
- Prevents algorithm abandonment

## Monetary Policy

### Supply

| Parameter | Value |
|-----------|-------|
| Maximum Supply | ~27,579,894 MARKS |
| Initial Block Reward | 20 MARKS |
| Current Distribution | Multi-algorithm (1/8 each) |

### Emission Schedule

The emission uses a combined **halving + quartering** pattern:

```
Block Rewards Over Time:
20 → 15 → 10 → 7.5 → 5 → 3.75 → 2.5 → ...
     Q1    H1    Q2    H2    Q3    H3
```

Where:
- **H** = Halving (reward / 2)
- **Q** = Quartering (reward × 0.75)

This creates a smoother emission curve than simple halving.

### Scaling Factors

A **Subsidy Scaling Factor (SSF)** adjusts rewards based on network hashrate:
- Prevents hashrate spikes from accelerating emission
- Maintains predictable monetary policy
- Updates approximately every 24 hours

## The Marking System

**Marking** is Bitmark's unique reputation + currency system.

### Core Idea

A mark is a "like" that carries real economic value:

```
Traditional Social Media          Marking System
─────────────────────────         ──────────────
Like → Number on screen           Mark → Real value transferred
Creator → Gets nothing            Creator → Gets paid
Platform → Sells attention        Protocol → Value flows directly
```

### How Marks Work

1. You see valuable content
2. You "mark" it (one click)
3. A small amount of MARKS transfers to the creator
4. Your reputation as a curator grows
5. Their reputation as a creator grows

### MRK Protocol

Marks are recorded on-chain using **OP_RETURN** transactions:

```
Mark Data (37 bytes):
┌─────────┬─────────┬─────────┬───────────────────────────────┐
│   MRK   │ VERSION │  TYPE   │     SHA256(reference)         │
│ 3 bytes │ 1 byte  │ 1 byte  │         32 bytes              │
└─────────┴─────────┴─────────┴───────────────────────────────┘
```

Mark types include:
- URL marks (web content)
- Address marks (creator attribution)
- Nostr profile marks
- Git commit marks
- Document proofs

Learn more: [MRK Protocol](/marking/mrk-protocol)

## Units of Currency

| Unit | Symbol | Value |
|------|--------|-------|
| Bitmark | BTM | 1.0 |
| Mark | ₥ | 0.001 BTM |
| Markbit | MB | 0.00000001 BTM |

The smallest divisible unit is **1 satoshi** = 0.00000001 BTM = 1 Markbit.

## Network Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      USER LAYER                             │
│    (Wallets, Applications, Marking Interface)               │
└───────────────────────────┬─────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────┐
│                      API LAYER                              │
│           (REST API, RPC, ElectrumX)                        │
└───────────────────────────┬─────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────┐
│                    NODE LAYER                               │
│          (Full Nodes, Miners, Indexers)                     │
└───────────────────────────┬─────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────┐
│                  BLOCKCHAIN LAYER                           │
│           (Consensus, Transactions, Blocks)                 │
└─────────────────────────────────────────────────────────────┘
```

## Key Terminology

| Term | Definition |
|------|------------|
| **Block** | Container of transactions, linked in a chain |
| **Transaction** | Transfer of value between addresses |
| **Mark** | A like with economic value |
| **Algorithm** | Hash function used for proof-of-work |
| **Difficulty** | Measure of mining computational effort |
| **UTXO** | Unspent Transaction Output - spendable coins |
| **DGWv3** | Dark Gravity Wave v3 difficulty algorithm |
| **AuxPow** | Auxiliary Proof-of-Work (merge mining) |

## Next Steps

- [The Marking Vision](/marking/vision) - Deep dive into the marking system
- [Technical Overview](/technical/overview) - Technical specifications
- [Mining Guide](/ecosystem/mining) - Start mining Bitmark
