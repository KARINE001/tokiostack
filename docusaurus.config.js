// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TokioStack Docs',
  tagline: 'Mastering Node Ops',
  favicon: 'img/favicon.ico',

  // ✅ Update the production URL
  url: 'https://karine001.github.io',
  baseUrl: '/tokiostack-docs/',  // Must match your repo name
  trailingSlash: false,

  // ✅ GitHub pages deployment config.
  organizationName: 'karine001', // Your GitHub username
  projectName: 'tokiostack-docs',  // Your repo name
  deploymentBranch: 'gh-pages',  // Branch where GitHub Pages deploys

  onBrokenLinks: 'warn', // Allow broken links temporarily for UI setup
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/karine001/tokiostack-docs/edit/main/',
        },
        blog: false, // Removed blog section
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
    },
    navbar: {
      title: 'TokioStack Docs',
      logo: {
        alt: 'TokioStack Logo',
        src: 'img/docusaurus.png',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Docs' },
        { href: 'https://github.com/karine001/tokiostack-docs', label: 'GitHub', position: 'right' },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;

