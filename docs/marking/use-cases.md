---
sidebar_position: 4
title: Use Cases
description: Real-world applications and use cases for the Marking system
---

# Marking Use Cases

The Marking system enables a wide range of applications beyond simple "likes with value."

## Content Monetization

### Articles and Blog Posts

Writers can receive direct payment for valuable content:

```mermaid
flowchart TB
    A["📖 Reader discovers great article"] --> B["✨ Reader marks the article<br/><small>Type 0x01: URL</small>"]
    B --> C["💸 Value transfers to writer's address"]
    C --> D["🎉 Writer earns without ads or subscriptions"]

    style A fill:#f3e8ff,stroke:#7c3aed
    style B fill:#ede9fe,stroke:#8b5cf6
    style C fill:#ddd6fe,stroke:#a78bfa
    style D fill:#dcfce7,stroke:#22c55e
```

**Benefits:**
- No paywall friction
- Readers pay what they feel content is worth
- Writers maintain creative independence
- No platform taking 30-50% cut

### Music and Art

Artists can monetize individual works:

```mermaid
flowchart TB
    A["🎵 Fan listens to song"] --> B["✨ Fan marks the song<br/><small>Type 0x03: Content</small>"]
    B --> C["💰 Artist receives payment"]
    C --> D["⭐ Fan builds reputation as curator"]

    style A fill:#f3e8ff,stroke:#7c3aed
    style B fill:#ede9fe,stroke:#8b5cf6
    style C fill:#dcfce7,stroke:#22c55e
    style D fill:#fef3c7,stroke:#f59e0b
```

### Video Content

Complement or replace ad-based revenue:

```mermaid
flowchart TB
    A["🎬 Video provides value"] --> B["✨ Viewers mark it"]
    B --> C["💸 Creator earns based on actual value delivered"]
    C --> D["🎯 No need to optimize for 'watch time'"]

    style A fill:#f3e8ff,stroke:#7c3aed
    style B fill:#ede9fe,stroke:#8b5cf6
    style C fill:#dcfce7,stroke:#22c55e
    style D fill:#dbeafe,stroke:#3b82f6
```

## Proof of Existence

### Document Timestamping

Prove a document existed at a specific time:

```javascript
// Create document mark
const docHash = SHA256(readFile('contract.pdf'));
const mark = createMark(0x06, docHash);  // Type: Document

// Later, prove existence
const blockTime = getBlockTimestamp(mark.txid);
console.log(`Document proven to exist before ${blockTime}`);
```

**Use cases:**
- Prior art claims
- Contract signing timestamps
- Research publication dates
- Legal evidence

### Cross-Chain Timestamping

Use Type 0x07 for OpenTimestamps-compatible proofs:

```javascript
// Same hash can be timestamped on both Bitcoin (via OTS) and Bitmark
const fileHash = SHA256(readFile('important.pdf'));

// Timestamp on Bitmark (faster, cheaper)
createMark(0x07, fileHash);

// Also timestamp on Bitcoin (via OpenTimestamps)
otsTimestamp(fileHash);

// Now you have dual-chain proof of existence
```

## Git Integration

### Code Contribution Attribution

Mark git commits to recognize developers:

```bash
# Mark a valuable commit
bitmark-cli mark git 7f8d9e2...

# The commit is now timestamped and attributed
```

**Benefits:**
- Provable contribution history
- Developer reputation building
- Open source contributor recognition

### Repository Endorsement

Mark repositories you find valuable:

```javascript
createMark(0x05, "https://github.com/project-bitmark/bitmark");
```

This creates a transparent, on-chain record of which projects the community values.

## Social Network Integration

### Nostr Integration

Mark Nostr profiles and events:

```javascript
// Mark a helpful Nostr user
createMark(0x04, nostrPubkey);  // Type: Nostr Profile

// Mark a valuable note
createMark(0x08, eventId);  // Type: Nostr Event
```

**Benefits:**
- Cross-platform reputation
- No platform can remove your marks
- Portable social proof

### Web of Trust

Build trust networks through marking patterns:

```mermaid
flowchart TB
    A["👩 Alice marks Bob's profile"] --> B["👨 Charlie trusts Alice"]
    B --> C["🤝 Charlie can partially trust Bob"]
    C --> D["🌐 Reputation flows through the network"]

    style A fill:#f3e8ff,stroke:#7c3aed
    style B fill:#ede9fe,stroke:#8b5cf6
    style C fill:#ddd6fe,stroke:#a78bfa
    style D fill:#c4b5fd,stroke:#8b5cf6
```

## Infrastructure Marketplace

### Paying for Services

Infrastructure operators can charge marks for services:

```yaml
# Explorer operator config
pricing:
  query: 0.0001 marks
  bulk_query: 0.00001 marks (per result)
  historical: 0.001 marks (older than 1 year)

free_tier:
  queries_per_day: 100
  reason: "Build reputation"
```

### Quality Competition

Operators compete on quality and reputation:

```mermaid
flowchart TB
    subgraph leaderboard["🏆 EXPLORER LEADERBOARD"]
        direction TB
        R1["🥇 #1 **fast-explorer.io**<br/>Rep: 12,847 · Uptime: 99.8%"]
        R2["🥈 #2 **reliable-api.com**<br/>Rep: 8,234 · Uptime: 99.2%"]
        R3["🥉 #3 **community-node**<br/>Rep: 892 · Uptime: 97.5%"]
    end

    style leaderboard fill:#f3e8ff,stroke:#7c3aed,stroke-width:2px
    style R1 fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
    style R2 fill:#f3f4f6,stroke:#9ca3af,stroke-width:2px
    style R3 fill:#fed7aa,stroke:#ea580c,stroke-width:2px
```

## Spam Prevention

### Stake-Based Posting

Require marks to post, returned if content is valuable:

```mermaid
flowchart TB
    A["📝 Post with 0.1 mark stake"] --> B["👥 Community evaluates"]
    B --> C{Valuable?}
    C -->|Yes| D["✅ Stake returned + marks received"]
    C -->|Spam| E["❌ Stake lost<br/><small>burned or redistributed</small>"]

    style A fill:#f3e8ff,stroke:#7c3aed
    style B fill:#ede9fe,stroke:#8b5cf6
    style C fill:#fef3c7,stroke:#f59e0b
    style D fill:#dcfce7,stroke:#22c55e
    style E fill:#fee2e2,stroke:#ef4444
```

### Economic Filtering

High-value content rises naturally:

```mermaid
flowchart LR
    A["✨ Total marks received"] --> B["📈 Higher visibility"]
    C["💸 Cost to spam"] --> D["🚫 Economically prohibitive"]
    E["⭐ Quality signals"] --> F["🔧 Built into the system"]

    style A fill:#f3e8ff,stroke:#7c3aed
    style B fill:#dcfce7,stroke:#22c55e
    style C fill:#fee2e2,stroke:#ef4444
    style D fill:#fecaca,stroke:#dc2626
    style E fill:#dbeafe,stroke:#3b82f6
    style F fill:#bfdbfe,stroke:#2563eb
```

## Charity and Public Goods

### Automatic Allocation

Configure wallets to donate portion of marks:

```yaml
wallet_config:
  charity_address: "bCharityAddress..."
  allocation: 1%  # 1% of received marks

  causes:
    - environment: 40%
    - education: 30%
    - healthcare: 30%
```

### Transparent Giving

All donations are on-chain and verifiable:

```javascript
// Anyone can verify charity funding
const charityMarks = getMarksTo(charityAddress);
console.log(`Total donated: ${sum(charityMarks)} BTM`);
```

## Creator Economy Features

### Referral Credits

Earn marks for sharing quality content:

```mermaid
flowchart TB
    A["👩 Alice shares article"] --> B["👨 Bob finds it through Alice's link"]
    B --> C["✨ Bob marks the article"]
    C --> D["💰 Creator: 90% · Alice: 10%"]

    style A fill:#f3e8ff,stroke:#7c3aed
    style B fill:#ede9fe,stroke:#8b5cf6
    style C fill:#ddd6fe,stroke:#a78bfa
    style D fill:#dcfce7,stroke:#22c55e
```

### Tiered Recognition

Different mark amounts for different recognition levels:

| Mark Amount | Recognition |
|-------------|-------------|
| 0.001-0.01 | Appreciation |
| 0.01-0.1 | Support |
| 0.1-1.0 | Patron |
| 1.0+ | Sponsor |

## Enterprise Applications

### Internal Knowledge Attribution

Companies can use marking for internal knowledge sharing:

```mermaid
flowchart TB
    A["📝 Employee writes valuable documentation"] --> B["✨ Colleagues mark it"]
    B --> C["📊 Contribution tracked and rewarded"]
    C --> D["🚀 Knowledge sharing incentivized"]

    style A fill:#f3e8ff,stroke:#7c3aed
    style B fill:#ede9fe,stroke:#8b5cf6
    style C fill:#ddd6fe,stroke:#a78bfa
    style D fill:#dcfce7,stroke:#22c55e
```

### Customer Feedback

Products and services can be marked:

```mermaid
flowchart TB
    A["😊 Customer has great experience"] --> B["✨ Customer marks the service<br/><small>Type 0x01: URL to service page</small>"]
    B --> C["✅ Business receives verifiable positive signal"]
    C --> D["📈 Reputation accumulates transparently"]

    style A fill:#f3e8ff,stroke:#7c3aed
    style B fill:#ede9fe,stroke:#8b5cf6
    style C fill:#ddd6fe,stroke:#a78bfa
    style D fill:#dcfce7,stroke:#22c55e
```

## Research Applications

### Academic Citation Alternative

Mark research papers as a form of citation:

```mermaid
flowchart TB
    A["🔬 Researcher finds valuable paper"] --> B["✨ Researcher marks the paper"]
    B --> C["🎓 Original authors receive recognition + value"]
    C --> D["📊 Citation metrics become economic metrics"]

    style A fill:#f3e8ff,stroke:#7c3aed
    style B fill:#ede9fe,stroke:#8b5cf6
    style C fill:#ddd6fe,stroke:#a78bfa
    style D fill:#dcfce7,stroke:#22c55e
```

### Open Science Funding

Fund research directly through marks:

```mermaid
flowchart TB
    A["📄 Scientist publishes open access paper"] --> B["✨ Community marks valuable research"]
    B --> C["💰 Funding flows to productive researchers"]
    C --> D["🚀 No grant committee bottleneck"]

    style A fill:#f3e8ff,stroke:#7c3aed
    style B fill:#ede9fe,stroke:#8b5cf6
    style C fill:#ddd6fe,stroke:#a78bfa
    style D fill:#dcfce7,stroke:#22c55e
```

## Implementation Examples

### Basic Marking Flow

```javascript
const bitmarkApi = require('bitmark-api');

async function markContent(url, amount) {
  // 1. Hash the reference
  const hash = crypto.SHA256(url);

  // 2. Create mark transaction
  const mark = await bitmarkApi.createMark({
    type: 0x01,  // URL
    referenceHash: hash,
    fee: amount
  });

  // 3. Store reference for lookup
  await bitmarkApi.storeReference(url, hash);

  // 4. Broadcast transaction
  const txid = await bitmarkApi.broadcast(mark);

  return { txid, hash };
}
```

### Querying Marks

```javascript
// Get all marks for a URL
const url = "https://example.com/article";
const hash = crypto.SHA256(url);
const marks = await bitmarkApi.getMarks({ hash });

console.log(`Total marks: ${marks.length}`);
console.log(`Total value: ${marks.reduce((a, m) => a + m.fee, 0)} BTM`);
```

## Getting Started

Ready to implement marking in your application?

1. [Set up bitmark-api](/ecosystem/api)
2. [Create your first mark](/guides/creating-marks)
3. [Integrate with your platform](/reference/rest-api)
