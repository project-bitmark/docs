---
sidebar_position: 3
title: FAQ
description: Frequently asked questions about Bitmark
---

# Frequently Asked Questions

## General

### What is Bitmark?

Bitmark is a cryptocurrency that has been running since July 2014. It combines:
- A stable proof-of-work blockchain
- Multi-algorithm mining (8 algorithms)
- A reputation + currency system called Marking

### How is Bitmark different from Bitcoin?

| Feature | Bitcoin | Bitmark |
|---------|---------|---------|
| Block time | 10 minutes | 2 minutes |
| Algorithms | 1 (SHA256D) | 8 (multi-algo) |
| Max supply | 21 million | ~27.58 million |
| Special features | - | Marking system |
| Difficulty | Every 2016 blocks | Every block (DGWv3) |

### Is Bitmark related to the other "Bitmark" (digital property registry)?

No. These are completely separate projects that happen to share a name. This Bitmark (project-bitmark) is a cryptocurrency focused on marking and reputation. The other is a digital property rights platform.

### When was Bitmark launched?

July 13, 2014. The genesis block timestamp reads:
> "13/July/2014, with memory of the past, we look to the future. TDR"

### Was there a premine or ICO?

No. Bitmark had a fair launch with no premine, no ICO, and no token sale. All coins were distributed through proof-of-work mining.

## Marking

### What is Marking?

Marking is a system where "likes" carry real economic value. When you mark content, you transfer actual currency to the creator, building both your reputation and theirs.

### How do marks work technically?

Marks use Bitcoin's OP_RETURN feature to store a 37-byte payload containing:
- Magic bytes ("MRK")
- Version number
- Type code
- SHA256 hash of the reference

### Can anyone create marks?

Yes! Anyone with Bitmark can create marks. The minimum amount is very small (around 0.001 BTM).

### Where is mark data stored?

The mark hash is stored on-chain (37 bytes). The original reference (URL, etc.) should be stored off-chain in a reference database.

## Mining

### What algorithms can I mine?

Bitmark supports 8 algorithms:
1. **Scrypt** - ASIC/GPU
2. **SHA256D** - ASIC
3. **Yescrypt** - CPU/GPU
4. **Argon2d** - CPU
5. **X17** - GPU
6. **Lyra2REv2** - GPU
7. **Equihash** - GPU/ASIC
8. **CryptoNight** - CPU/GPU

### Which algorithm is most profitable?

It varies based on your hardware and current network conditions. Generally:
- **CPU**: Argon2d, Yescrypt, CryptoNight
- **GPU**: X17, Lyra2REv2, Equihash, Scrypt
- **ASIC**: Scrypt, SHA256D

### Can I merge mine Bitmark?

Yes! All 8 algorithms support merge mining. You can mine Bitmark while mining Bitcoin, Litecoin, or other compatible chains.

### What is the block reward?

Currently around 2.5 MARKS per block (varies with emission schedule and scaling factor). Each algorithm contributes 1/8 of the emission.

## Wallet

### What wallets support Bitmark?

- **Bitmark Core** - Full node wallet (desktop)
- **Electrum-Bitmark** - Light wallet (desktop)
- **Brain Wallet** - Web wallet
- **Paper Wallet** - Cold storage

### Where can I get Bitmark?

- Mine it yourself
- Trade on exchanges (check community for current listings)
- Receive marks for creating valuable content

### Are Bitmark addresses compatible with Bitcoin?

No. Bitmark uses different address prefixes:
- **Mainnet**: Starts with `b`
- **Testnet**: Starts with `u`

Do not send Bitcoin to Bitmark addresses or vice versa.

## Technical

### What is DGWv3?

Dark Gravity Wave version 3 is Bitmark's difficulty adjustment algorithm. It adjusts difficulty every block, responding quickly to hashrate changes.

### What are Surge Protector and Resurrector?

**Surge Protector**: Activates after 9 consecutive blocks from the same algorithm, reducing difficulty to prevent domination.

**Resurrector**: Activates if an algorithm has no blocks for 160+ minutes, reducing difficulty to revive the algorithm.

### What is the Subsidy Scaling Factor?

A mechanism that adjusts block rewards based on network hashrate to maintain predictable emission rates.

### Is Bitmark code audited?

Bitmark is based on Bitcoin Core, which has been extensively reviewed. The multi-algorithm and marking additions follow Bitcoin development practices.

## Network

### How many confirmations should I wait?

- **Small amounts**: 1-3 confirmations
- **Medium amounts**: 6 confirmations
- **Large amounts**: 10+ confirmations

With 2-minute blocks, 6 confirmations = ~12 minutes.

### What ports does Bitmark use?

- **P2P**: 9265 (mainnet), 19265 (testnet)
- **RPC**: 9266 (mainnet), 19266 (testnet)

### How do I find peers?

Bitmark has DNS seeds and hardcoded node lists. You can also manually add nodes:
```bash
bitmark-cli addnode "seed.bitmark.co" "add"
```

## Troubleshooting

### My wallet won't sync

1. Check internet connection
2. Verify peers: `bitmark-cli getconnectioncount`
3. Add manual peers: `bitmark-cli addnode "seed.bitmark.co" "onetry"`
4. Try restarting: `bitmark-cli stop && bitmarkd`

### "Database corrupted" error

```bash
bitmarkd -reindex
```

### I sent to wrong address

Cryptocurrency transactions are irreversible. If you sent to an invalid address, the funds may be lost. If sent to a valid wrong address, only the owner of that address can return them.

### My balance is wrong

1. Wait for full sync
2. Check confirmed vs. unconfirmed
3. Try rescanning: `bitmarkd -rescan`

## Community

### Where can I get help?

- [GitHub Issues](https://github.com/project-bitmark/bitmark/issues)
- [Reddit r/Bitmark](https://reddit.com/r/Bitmark)
- [BitcoinTalk](https://bitcointalk.org/index.php?topic=660544.0)

### How can I contribute?

- Report bugs
- Submit pull requests
- Improve documentation
- Help others in community channels
- Run a node

See [Contributing Guide](/guides/contributing) for details.

### Is there a bounty program?

Check community channels for current bounty programs and development funding initiatives.
