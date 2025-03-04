/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro", // Ensures the intro page appears first
      label: "📌 Welcome to TokioStack",
    },
    {
      type: "category",
      label: "Node Installation",
      collapsible: true,
      collapsed: false,
      items: [
        "Node-installation-guides/0g-storage-node",
        "Node-installation-guides/pipe-network-cache-node",
      ],
    },
    {
      type: "category",
      label: "Securing a Server",
      collapsible: true,
      collapsed: false,
      items: [
        "Securing-a-Server/index",
        {
          type: "category",
          label: "Network Security",
          items: ["Securing-a-Server/Network-Security/Firewall-and-Fail2ban"],
        },
        {
          type: "category",
          label: "SSH Security",
          items: [
            "Securing-a-Server/SSH-Security/Changing-SSH-Port",
            "Securing-a-Server/SSH-Security/Disable-Root-Login",
          ],
        },
        {
          type: "category",
          label: "System Security & Monitoring",
          items: ["Securing-a-Server/System-Security-and-Monitoring/Updates-and-Monitoring"],
        },
        {
          type: "category",
          label: "User Management",
          items: ["Securing-a-Server/User-Management/Creating-a-Non-Root-User"],
        },
      ],
    },
    {
      type: "category",
      label: "Monitoring Guide",
      collapsible: true,
      collapsed: false,
      items: [
        "Monitoring-Guide/index",
        "Monitoring-Guide/Installing-Monitoring-Tools",
      ],
    },
    {
      type: "category",
      label: "Docker",
      collapsible: true,
      collapsed: false,
      items: ["Docker/Installing-and-Managing-Docker-for-Nodes"],
    },
  ],
};

module.exports = sidebars;
