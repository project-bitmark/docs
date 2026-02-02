---
sidebar_position: 1
title: BIP Index
description: Index of Bitmark Improvement Proposals
---

# Bitmark Improvement Proposals (BIPs)

BIPs are design documents providing information to the Bitmark community or describing new features for Bitmark.

## What is a BIP?

A Bitmark Improvement Proposal (BIP) is a formal document that:

- Describes a new feature or change
- Provides technical specification
- Documents design rationale
- Tracks implementation status

BIPs are modeled after Bitcoin's BIP process.

## BIP Types

| Type | Description |
|------|-------------|
| **Standards Track** | Changes affecting consensus, protocol, or interoperability |
| **Informational** | Design issues, guidelines, or information |
| **Process** | Changes to BIP process itself |

## BIP Statuses

| Status | Meaning |
|--------|---------|
| **Draft** | Under development |
| **Proposed** | Ready for community review |
| **Final** | Accepted and implemented |
| **Active** | Ongoing standards |
| **Rejected** | Not accepted |
| **Withdrawn** | Removed by author |
| **Superseded** | Replaced by another BIP |

## BIP Index

### Consensus BIPs

| BIP | Title | Status | Type |
|-----|-------|--------|------|
| [100](/bips/bip-100) | Original Design - Fair Launch and Core Principles | Final | Informational |
| [101](/bips/bip-101) | Multi-Algorithm Proof-of-Work (mPoW) | Final | Standards Track |
| [102](/bips/bip-102) | Coin Emission Model (CEM) | Final | Standards Track |

### Process BIPs

| BIP | Title | Status | Type |
|-----|-------|--------|------|
| 2 | BIP Process | Active | Process |

### Draft BIPs

| BIP | Title | Status | Type |
|-----|-------|--------|------|
| 3 | Marks Exchange Protocol | Draft | Standards Track |
| 4 | Atomic Swaps | Draft | Standards Track |
| 5 | Private Key Offset | Draft | Standards Track |

## Key BIPs Explained

### BIP-100: Original Design

Documents Bitmark's launch parameters and design philosophy:
- Genesis block specifications
- Fair launch principles
- Original network parameters
- Stakeholder balance approach

[Read BIP-100 →](/bips/bip-100)

### BIP-101: Multi-Algorithm PoW

The major hard fork introducing:
- Eight mining algorithms
- Dark Gravity Wave v3 difficulty
- Surge Protector and Resurrector
- Merge mining support

[Read BIP-101 →](/bips/bip-101)

### BIP-102: Coin Emission Model

Post-fork monetary policy:
- Emission-based subsidy thresholds
- Per-algorithm distribution
- Subsidy Scaling Factor
- Maximum supply calculations

[Read BIP-102 →](/bips/bip-102)

## Creating a BIP

### Process

1. **Discuss**: Share idea in community channels
2. **Draft**: Write BIP using the template
3. **Submit**: Create pull request to BIP repository
4. **Review**: Community and developer review
5. **Revise**: Address feedback
6. **Accept**: Merge when consensus reached

### Template

```mediawiki
<pre>
  BIP: <number>
  Title: <title>
  Author: <author name and email>
  Status: Draft
  Type: <Standards Track | Informational | Process>
  Created: <date>
  License: MIT
</pre>

==Abstract==
Short description of the proposal.

==Motivation==
Why is this change needed?

==Specification==
Technical details of the proposal.

==Rationale==
Design decisions and alternatives considered.

==Backward Compatibility==
Impact on existing systems.

==Reference Implementation==
Links to implementation code.

==Copyright==
This document is licensed under the MIT License.
```

### Repository

BIPs are maintained at [github.com/project-bitmark/BIP](https://github.com/project-bitmark/BIP).

## Related Resources

- [Technical Overview](/technical/overview) - Implementation details
- [Network Parameters](/technical/network-parameters) - Parameter reference
- [Contributing Guide](/guides/contributing) - How to contribute
