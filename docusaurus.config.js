// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

theme: {
  customCss: require.resolve('./src/css/custom.css'),
},



/** @type {import('@docusaurus/types').Config} */
const isCloudflare = process.env.CLOUDFLARE === 'true';

const config = {
  title: 'TokioStack',
  tagline: 'Mastering Node Ops',
  favicon: 'img/favicon.ico',

  url: isCloudflare ? 'https://tokiostack.pages.dev' : 'https://karine001.github.io',
  baseUrl: isCloudflare ? '/' : '/tokiostack/',
  organizationName: 'KARINE001', // GitHub username
  projectName: 'tokiostack', // Repo name
  trailingSlash: false,
  deploymentBranch: 'gh-pages', // Branch where GitHub Pages deploys

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
          routeBasePath: '/docs', // Keeps the main page AND a separate docs page
          sidebarCollapsed: true, // Sidebar starts collapsed
          editUrl: 'https://github.com/KARINE001/tokiostack/edit/main/',
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
      title: 'TokioStack',
      logo: {
        alt: 'Docusaurus Logo',
        src: 'img/docusaurus.png',
      },
      style: 'primary', // Ensures navbar uses primary color
      items: [
        { to: '/docs/intro', label: 'Docs', position: 'left' },
        { href: 'https://github.com/KARINE001', label: 'GitHub', position: 'right' },
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
