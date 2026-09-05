// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Tutorials',
      items: ['tutorials/getting-started'],
    },
    {
      type: 'category',
      label: 'How-to Guides',
      items: [
        'how-to-guides/set-up-sync',
        'how-to-guides/use-tags-across-notebooks',
        'how-to-guides/import-and-export-notes',
        'how-to-guides/enable-encryption',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/supported-formats',
        'reference/keyboard-shortcuts',
      ],
    },
    {
      type: 'category',
      label: 'Explanation',
      items: [
        'explanation/what-makes-joplin-different',
        'explanation/how-sync-works',
        'explanation/how-encryption-works',
      ],
    },
  ],
};

module.exports = sidebars;