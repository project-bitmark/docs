---
sidebar_position: 1
title: Introduction to Bitmark
description: Learn about Bitmark - a stable cryptocurrency with a reputation system called Marking
---

# Introduction to Bitmark

```mermaid
flowchart LR
    subgraph bitmark["✨ PROJECT BITMARK"]
        direction TB
        A["⛓️ **Stable Currency Network**<br/>Balanced for all participants"]
        B["🎯 **Marking System**<br/>Reputation + Currency"]
    end

    A ~~~ B

    style bitmark fill:#f3e8ff,stroke:#7c3aed,stroke-width:2px
    style A fill:#ede9fe,stroke:#8b5cf6
    style B fill:#ede9fe,stroke:#8b5cf6
```

Project Bitmark is a multi-faceted project that provides:

1. **A stable cryptographic currency network** which balances the requirements of all parties involved
2. **A far-reaching adoption initiative** guided by the vision of a novel reputation + currency system called **Marking**

## What is Bitmark?

Bitmark is a cryptocurrency that has been operational since **July 2014**. It was designed with a focus on:

```mermaid
flowchart TB
    subgraph pillars["🏛️ FOUR PILLARS"]
        direction LR
        P1["🏔️ **Stability**<br/>Proven, maturing<br/>network"]
        P2["⚖️ **Fairness**<br/>No premine<br/>No ICO"]
        P3["🌐 **Accessibility**<br/>Multi-algorithm<br/>mining"]
        P4["💎 **Earned Value**<br/>Not allocated<br/>but earned"]
    end

    style pillars fill:#f3e8ff,stroke:#7c3aed,stroke-width:2px
    style P1 fill:#ede9fe,stroke:#8b5cf6
    style P2 fill:#ede9fe,stroke:#8b5cf6
    style P3 fill:#ede9fe,stroke:#8b5cf6
    style P4 fill:#ede9fe,stroke:#8b5cf6
```

## The Genesis

> "13/July/2014, with memory of the past, we look to the future. TDR"
>
> — Bitmark Genesis Block

Bitmark was launched with a genuine fair launch approach, ensuring that all coins were distributed through proof-of-work mining. There was no premine or token sale.

```mermaid
timeline
    title Bitmark History
    2014 : Genesis Block (July 13)
         : Fair launch, no premine
         : Community mining begins
    2018 : Block 450,947 Hard Fork
         : 8 Mining Algorithms
         : DGWv3 Difficulty
    2024 : 10 Year Anniversary
         : Marking Protocol
         : Continued Development
```

## Key Features

### Multi-Algorithm Proof of Work

Since the 2018 hard fork at block 450,947, Bitmark supports **eight distinct mining algorithms**:

```mermaid
flowchart TB
    subgraph algos["⛏️ 8 MINING ALGORITHMS"]
        direction TB
        subgraph row1[" "]
            direction LR
            A1["**SCRYPT**<br/>ASIC/GPU"]
            A2["**SHA256D**<br/>ASIC"]
            A3["**YESCRYPT**<br/>CPU/GPU"]
            A4["**ARGON2D**<br/>CPU"]
        end
        subgraph row2[" "]
            direction LR
            B1["**X17**<br/>GPU"]
            B2["**LYRA2REv2**<br/>GPU"]
            B3["**EQUIHASH**<br/>GPU/ASIC"]
            B4["**CRYPTONIGHT**<br/>CPU/GPU"]
        end
    end

    style algos fill:#f3e8ff,stroke:#7c3aed,stroke-width:2px
    style row1 fill:transparent,stroke:none
    style row2 fill:transparent,stroke:none
    style A1 fill:#ede9fe,stroke:#8b5cf6
    style A2 fill:#ede9fe,stroke:#8b5cf6
    style A3 fill:#ede9fe,stroke:#8b5cf6
    style A4 fill:#ede9fe,stroke:#8b5cf6
    style B1 fill:#ddd6fe,stroke:#a78bfa
    style B2 fill:#ddd6fe,stroke:#a78bfa
    style B3 fill:#ddd6fe,stroke:#a78bfa
    style B4 fill:#ddd6fe,stroke:#a78bfa
```

This diversity ensures that mining remains accessible to different types of hardware.

### The Marking System

The **Marking** system is Bitmark's unique reputation + currency mechanism. Think of it as "likes that carry real value":

```mermaid
flowchart LR
    subgraph marking["✨ MARKING = SPENDABLE KARMA"]
        direction LR
        A["👀 See valuable<br/>content"] --> B["✨ Mark it<br/><small>one click</small>"]
        B --> C["💸 Value transfers<br/>to creator"]
        C --> D["⭐ Both reputations<br/>grow"]
    end

    style marking fill:#f3e8ff,stroke:#7c3aed,stroke-width:2px
    style A fill:#ede9fe,stroke:#8b5cf6
    style B fill:#ddd6fe,stroke:#a78bfa
    style C fill:#c4b5fd,stroke:#8b5cf6
    style D fill:#dcfce7,stroke:#22c55e
```

- When you **mark** content, you transfer actual currency to the creator
- Your reputation as a curator grows with good marks
- Quality content rises based on economic signals, not algorithms
- Spam becomes economically expensive

Learn more in [The Marking Vision](/marking/vision).

### Network Parameters

| Parameter | Value |
|-----------|-------|
| Block Time | 2 minutes |
| Max Supply | ~27.58 million MARKS |
| Difficulty Adjustment | Dark Gravity Wave v3 |
| Consensus | Multi-Algorithm PoW |

## Why Bitmark?

```mermaid
flowchart TB
    subgraph users["👤 FOR USERS"]
        U1["⚡ 2-min confirmations"]
        U2["💰 Low fees"]
        U3["🏛️ Stable network"]
    end

    subgraph creators["🎨 FOR CREATORS"]
        C1["💸 Direct value transfer"]
        C2["⭐ Portable reputation"]
        C3["🔓 No gatekeeping"]
    end

    subgraph miners["⛏️ FOR MINERS"]
        M1["🎯 8 algorithms"]
        M2["🖥️ CPU/GPU/ASIC"]
        M3["🔗 Merge mining"]
    end

    subgraph devs["💻 FOR DEVELOPERS"]
        D1["₿ Bitcoin-compatible"]
        D2["🔌 REST API"]
        D3["🚀 Active development"]
    end

    style users fill:#dbeafe,stroke:#3b82f6,stroke-width:2px
    style creators fill:#dcfce7,stroke:#22c55e,stroke-width:2px
    style miners fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style devs fill:#f3e8ff,stroke:#7c3aed,stroke-width:2px
    style U1 fill:#eff6ff,stroke:#3b82f6
    style U2 fill:#eff6ff,stroke:#3b82f6
    style U3 fill:#eff6ff,stroke:#3b82f6
    style C1 fill:#f0fdf4,stroke:#22c55e
    style C2 fill:#f0fdf4,stroke:#22c55e
    style C3 fill:#f0fdf4,stroke:#22c55e
    style M1 fill:#fffbeb,stroke:#f59e0b
    style M2 fill:#fffbeb,stroke:#f59e0b
    style M3 fill:#fffbeb,stroke:#f59e0b
    style D1 fill:#faf5ff,stroke:#7c3aed
    style D2 fill:#faf5ff,stroke:#7c3aed
    style D3 fill:#faf5ff,stroke:#7c3aed
```

## Getting Started

Ready to dive in? Here's where to go next:

```mermaid
flowchart LR
    A["🚀 **Quick Start**<br/>Get running fast"] --> B["🔧 **Installation**<br/>Wallet & node setup"]
    B --> C["📚 **Core Concepts**<br/>Fundamentals"]
    C --> D["✨ **Start Marking**<br/>Join the network"]

    style A fill:#7c3aed,stroke:#5b21b6,color:#fff
    style B fill:#8b5cf6,stroke:#6d28d9,color:#fff
    style C fill:#a78bfa,stroke:#7c3aed,color:#fff
    style D fill:#c4b5fd,stroke:#8b5cf6

    click A "/getting-started/quick-start"
    click B "/getting-started/installation"
    click C "/getting-started/core-concepts"
```

- [Quick Start Guide](/getting-started/quick-start) - Get up and running fast
- [Installation](/getting-started/installation) - Set up wallet and node
- [Core Concepts](/getting-started/core-concepts) - Understand the fundamentals

## Community

Join the Bitmark community:

- [GitHub](https://github.com/project-bitmark) - Source code and development
- [Reddit](https://reddit.com/r/Bitmark) - Community discussions
- [BitcoinTalk](https://bitcointalk.org/index.php?topic=660544.0) - Original announcement thread

## Project Repositories

The main repositories in the Project Bitmark ecosystem:

| Repository | Description |
|------------|-------------|
| [bitmark](https://github.com/project-bitmark/bitmark) | Core node software |
| [bitmark-api](https://github.com/project-bitmark/bitmark-api) | REST API and indexer |
| [marked](https://github.com/project-bitmark/marked) | Social marking application |
| [electrum-bitmark](https://github.com/project-bitmark/electrum-bitmark) | Light wallet |
| [BIP](https://github.com/project-bitmark/BIP) | Bitmark Improvement Proposals |
