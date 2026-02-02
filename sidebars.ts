import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/introduction',
        'getting-started/quick-start',
        'getting-started/installation',
        'getting-started/core-concepts',
      ],
    },
    {
      type: 'category',
      label: 'The Marking System',
      collapsed: false,
      items: [
        'marking/vision',
        'marking/how-it-works',
        'marking/mrk-protocol',
        'marking/use-cases',
      ],
    },
    {
      type: 'category',
      label: 'Technical Reference',
      collapsed: true,
      items: [
        'technical/overview',
        'technical/multi-algo',
        'technical/difficulty-adjustment',
        'technical/emission-model',
        'technical/merge-mining',
        'technical/network-parameters',
      ],
    },
    {
      type: 'category',
      label: 'Ecosystem',
      collapsed: true,
      items: [
        'ecosystem/wallets',
        'ecosystem/explorers',
        'ecosystem/mining',
        'ecosystem/api',
        'ecosystem/applications',
      ],
    },
    {
      type: 'category',
      label: 'BIPs',
      collapsed: true,
      items: [
        'bips/index',
        'bips/bip-100',
        'bips/bip-101',
        'bips/bip-102',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      items: [
        'guides/running-node',
        'guides/wallet-setup',
        'guides/creating-marks',
        'guides/contributing',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/rpc-api',
        'reference/rest-api',
        'reference/faq',
        'reference/glossary',
      ],
    },
  ],
};

export default sidebars;
