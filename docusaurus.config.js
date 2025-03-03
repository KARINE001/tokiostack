// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

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
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
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
          routeBasePath: '/docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // Ensure this is correctly set
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
        alt: 'TokioStack Logo',
        src: 'img/docusaurus.png',
      },
      style: 'primary',
      items: [
        { to: '/docs/intro', label: 'Docs', position: 'left' },
        { href: 'https://github.com/KARINE001/tokiostack', label: 'GitHub', position: 'right' },
      ],
    },
  },

  stylesheets: [
    {
      href: '/static/css/tailwind.css', // Ensures TailwindCSS is properly loaded
      type: 'text/css',
    },
  ],
};

export default config;
