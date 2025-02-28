// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TokioStack Docs',
  tagline: 'Mastering Node Ops',
  favicon: 'img/favicon.ico',

  // ✅ Update the production URL
  url: 'https://karine001.github.io',
  baseUrl: '/tokiostack/',  // Updated repo name
  trailingSlash: false,

  // ✅ GitHub pages deployment config.
  organizationName: 'karine001', // Your GitHub username
  projectName: 'tokiostack',  // Updated repo name
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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // This makes the docs the homepage
          sidebarCollapsed: true, // Ensure sidebar categories are collapsed by default
          editUrl: 'https://github.com/karine001/tokiostack/edit/main/',
        },
        blog: false, // Removed blog section
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        alt: 'Docusaurus Logo',
        src: 'img/docusaurus.png',
      },
      style: 'primary', // Ensures navbar uses primary color
      items: [
        { href: 'https://github.com/KARINE001/tokiostack', label: 'GitHub', position: 'right' },
      ],
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true, // Sidebar folders start closed
        hideable: false, // Ensure sidebar is always visible
      },
    },
  },
};

export default config;
