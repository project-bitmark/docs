---
sidebar_position: 5
title: Applications
description: Applications built on Bitmark
---

# Applications

Applications and services built on Bitmark.

## Marked (Social Client)

A social marking application for discovering and marking content.

### Repository

[github.com/project-bitmark/marked](https://github.com/project-bitmark/marked)

### Features

- Mark web content with one click
- Discover highly-marked content
- Build reputation as curator
- Nostr integration
- Real-time updates

### Technology Stack

- React 18 + TypeScript
- Tailwind CSS
- Vite
- Nostr protocol
- Bitcoin Connect

### Running Locally

```bash
git clone https://github.com/project-bitmark/marked.git
cd marked
npm install
npm run dev
```

### Docker

```bash
docker build -t marked .
docker run -p 3000:3000 marked
```

## Timestamping Service

Proof-of-existence timestamping using Bitmark.

### Calendar Server

- **URL**: `https://calendar.bitmark.one/`
- **Backup**: `https://173.255.212.141/`

### Usage

```bash
# Using ots-cli
npm install -g opentimestamps

# Timestamp a file
ots-cli.js -c https://calendar.bitmark.one/ stamp document.pdf

# Verify timestamp
ots-cli.js verify document.pdf.ots
```

### Integration

```javascript
const OpenTimestamps = require('opentimestamps');

async function timestamp(fileHash) {
  const detached = OpenTimestamps.DetachedTimestampFile.fromHash(
    new OpenTimestamps.Ops.OpSHA256(),
    Buffer.from(fileHash, 'hex')
  );

  await OpenTimestamps.stamp(detached, {
    calendars: ['https://calendar.bitmark.one/']
  });

  return detached.serializeToBytes();
}
```

## Noskey

Cryptographic key generation utility.

### Repository

[github.com/project-bitmark/noskey](https://github.com/project-bitmark/noskey)

### Features

- Generate Nostr keys (nsec, npub)
- Generate Bitmark addresses
- Generate Bitcoin addresses
- SSH key generation
- Vanity key support

### Usage

```bash
npx noskey

# Output:
# Private Key (hex): abc123...
# Public Key (hex): def456...
# nsec: nsec1...
# npub: npub1...
# Bitmark Address: bKxE7...
# Bitcoin Address: 1ABC...
```

## Git Integration

### Git Mark

Anchor git commits to Bitmark blockchain.

**Website**: [git-mark.com](https://git-mark.com)

### Usage

```bash
# Mark a commit
git mark HEAD

# Verify a commit's mark
git mark --verify abc123
```

### Configuration

```bash
# Set up git hooks
git config --local bitmark.address bYourAddress
git config --local bitmark.automark true
```

## Payment Tools

### iPago

Payment integration library.

### CoinBin

Coin management utilities for developers.

**Features**:
- UTXO management
- Transaction building
- Address generation
- Multi-signature support

## Ecosystem Directory

### bitmark.rocks

Interactive resource directory.

**URL**: [bitmark.rocks](https://bitmark.rocks/)

**Content**:
- Explorer links
- Wallet downloads
- Exchange listings
- Community resources
- Development tools

## Building Applications

### Using bitmark-api

```javascript
const BitmarkAPI = require('bitmark-api-client');

const client = new BitmarkAPI({
  baseUrl: 'http://localhost:3000'
});

// Create a mark
async function markContent(url, privateKey) {
  const hash = crypto.SHA256(url);

  const mark = await client.createMark({
    type: 1,
    reference: url,
    referenceHash: hash
  });

  return mark.txid;
}
```

### Direct RPC

```javascript
const bitcoin = require('bitcoinjs-lib');
const Client = require('bitcoin-core');

const client = new Client({
  host: 'localhost',
  port: 9266,
  username: 'bitmarkrpc',
  password: 'yourpassword'
});

// Get blockchain info
const info = await client.getBlockchainInfo();
```

### Nostr Integration

```javascript
import { SimplePool, generatePrivateKey, getPublicKey } from 'nostr-tools';

// Connect mark metadata to Nostr
async function publishMarkContext(mark, context) {
  const pool = new SimplePool();

  const event = {
    kind: 30078,
    content: context.description,
    tags: [
      ['d', 'mark-context'],
      ['mark-txid', mark.txid],
      ['reference', mark.reference],
    ]
  };

  await pool.publish(relays, event);
}
```

## Application Ideas

### Content Platforms

- **Blog with Marks**: Readers mark posts, authors earn
- **Image Gallery**: Visual content marking
- **Podcast Platform**: Audio content with marks

### Social Features

- **Reputation Profiles**: Aggregate marks into profiles
- **Leaderboards**: Top creators and curators
- **Discovery Feed**: Trending marked content

### Developer Tools

- **Mark Analytics**: Track mark patterns
- **Integration Widgets**: Embed mark buttons
- **Notification Services**: Alert on new marks

### Infrastructure

- **Mark Indexers**: Specialized mark databases
- **Reference Storage**: Off-chain reference hosting
- **API Gateways**: Managed API access

## See Also

- [API Documentation](/ecosystem/api) - Building with APIs
- [MRK Protocol](/marking/mrk-protocol) - Mark data format
- [Use Cases](/marking/use-cases) - Application ideas
