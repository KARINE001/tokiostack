// @ts-check

module.exports = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '🏠 Introduction',
    },
    {
      type: 'category',
      label: 'Node Installation Guides',
      items: [
        'node-installation-guides/pipe-network-cache-node',
        'node-installation-guides/0g-storage-node',
      ],
    },
    {
      type: 'category',
      label: 'VPS Security & Management',
      items: [
        'vps-security-management/quick-vps-security-setup',
        'vps-security-management/simple-docker-node-management',
        'vps-security-management/basic-monitoring',
      ],
    },
    {
      type: 'category',
      label: 'Optimization & Maintenance',
      items: [
        'optimization-maintenance/automate-node-updates-with-watchtower',
      ],
    },
    {
      type: 'category',
      label: 'Monitoring Tutorials',
      items: ['monitoring-tutorial/index'],
    },
    {
      type: 'category',
      label: 'Server Security Practices',
      items: ['server-security-practices/index'],
    },
    {
      type: 'category',
      label: 'SSH Tools Comparison',
      items: ['ssh-tools-comparison/index'],
    },
    {
      type: 'category',
      label: 'Cloud Development Tools',
      items: [
        'cloud-dev-tools/stackblitz-guide',
        'cloud-dev-tools/codesandbox-guide',
      ],
    },
  ],
};
