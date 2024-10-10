// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Torque",
  tagline: "Torque Protocol Documentation",
  url: "https://docs.torque.fi",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: "OlympusDAO", // Usually your GitHub org/user name.
  // projectName: "torque-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/main", // defaults to docs, but `main` maintains the gitbook paths
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        // googleTagManager: {
        //   containerId: 'GTM-NJSWZX5'
        // }
      }),
    ],
  ],
  // config for KaTex plugin: https://docusaurus.io/docs/markdown-features/math-equations
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        // title: "Torque",
        logo: {
          alt: "Torque Docs",
          src: "img/logo.png",
          srcDark: "img/logo_dark.png",
        },
        items: [
          {
            type: "doc",
            docId: "overview/intro",
            position: "left",
            label: "Site",
            href: "https://torque.fi",
          },
          {
            type: "doc",
            docId: "overview/intro",
            position: "left",
            label: "App",
            href: "https://app.torque.fi",
          },
          {
            type: "doc",
            docId: "overview/intro",
            position: "left",
            label: "Voting",
            href: "https://app.torque.fi/vote",
          },
          // {
          //   href: "https://commonwealth.im/torque",
          //   label: "Forum",
          //   position: "right",
          // },
          {
            href: "https://dub.sh/torque-roadmap",
            label: "Roadmap",
            position: "right",
          },
          {
            href: "https://forms.gle/uzRN4tQtVoE2Dthw6",
            label: "Feedback",
            position: "right",
          },
          {
            href: "https://t.me/torquefi",
            label: "Support",
            position: "right",
          },
          // {
          //   href: "mailto:hello@torque.fi",
          //   label: "Contact",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Protocol",
            items: [
              {
                label: "Home",
                href: "https://app.torque.fi",
              },
              {
                label: "Boost",
                href: "https://app.torque.fi/boost",
              },
              {
                label: "Borrow",
                href: "https://app.torque.fi/borrow",
              },
              {
                label: "Vote",
                href: "https://app.torque.fi/vote",
              },
            ],
          },
          {
            title: "Interfaces",
            items: [
              {
                label: "Flagship",
                href: "https://app.torque.fi",
              },
              {
                label: "Torque BTC",
                href: "https://tbtc.torque.fi",
              },
              {
                label: "Torque ETH",
                href: "https://teth.torque.fi",
              },
              {
                label: "Torque USD",
                href: "https://tusd.torque.fi",
              },
            ],
          },
          {
            title: "Ecosystem",
            items: [
              {
                label: "Uniswap",
                href: "https://bit.ly/torque-uniswap",
              },
              {
                label: "CoinGecko",
                href: "https://www.coingecko.com/en/coins/torque",
              },
              {
                label: "Arbiscan",
                href: "https://bit.ly/torque-arbiscan",
              },
              {
                label: "Tally",
                href: "https://www.tally.xyz/gov/torque",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/torquefi",
              },
              {
                label: "Discord",
                href: "https://bit.ly/torq-disc",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@torquefi",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/torquefi",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["solidity"],
      },
    }),
};

module.exports = config;
