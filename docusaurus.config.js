const config = {
  title: "TokioStack",
  url: "https://yourcustomdomain.com", // Update if using a custom domain
  baseUrl: "/",
  organizationName: "KARINE001",
  projectName: "tokiostack",
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"), // Ensures sidebar loads
          routeBasePath: "docs",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "TokioStack Docs",
      logo: {
        alt: "TokioStack Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "/docs", label: "Docs", position: "left" },
        {
          href: "https://github.com/KARINE001",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true, // Allows sidebar to be collapsible
        autoCollapseCategories: true, // Auto-collapse categories
      },
    },
  },
};

module.exports = config;
