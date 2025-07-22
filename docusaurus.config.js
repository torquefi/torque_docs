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
  favicon: "img/apple-touch-icon.png",

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

  scripts: [
    {
      src: '/js/accordion.js',
      async: false,
      defer: false,
    },
    {
      src: 'https://cloud.umami.is/script.js',
      'data-website-id': 'ec08eaa3-d7ae-4f98-99ab-b86a8b4a4639',
      defer: true,
    },
  ],

  // Add Apple touch icon and other meta tags
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        href: '/img/apple-touch-icon.png',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image',
        content: '/img/torque.png',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image:width',
        content: '1200',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image:height',
        content: '630',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:image',
        content: '/img/torque.png',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
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
            docId: "overview/engines",
            position: "left",
            label: "Concepts",
            href: "/main/overview/engines",
          },
          {
            type: "doc",
            docId: "contracts/addresses",
            position: "left",
            label: "Contracts",
            to: "/main/contracts/addresses",
          },
          {
            type: "doc",
            docId: "overview/intro",
            position: "left",
            label: "SDK",
            to: "/main/overview/sdk",
          },
          {
            type: "doc",
            docId: "overview/intro",
            position: "left",
            label: "API",
            to: "/main/overview/api",
          },
          {
            href: "https://t.me/torquefi",
            label: "Telegram",
            position: "right",
          },
          {
            href: "https://bit.ly/torq-disc",
            label: "Discord",
            position: "right",
          },
          {
            href: "https://x.com/torquefi",
            label: "X (Twitter)",
            position: "right",
          },
          {
            href: "https://github.com/torquefi",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            items: [
              {
                html: `
                  <a href="/">
                    <img src="/img/logo.png" alt="Torque Logo" width="122" height="36" class="footer__logo" />
                  </a>
                  <div class="footer__copyright">© ${new Date().getFullYear()} Torque</div>
                `,
              },
            ],
          },
          {
            title: "Solutions",
            items: [
              {
                label: "Exchange",
                href: "https://torque.fi",
              },
              {
                label: "Explorer",
                href: "https://explorer.torque.fi",
              },
              {
                label: "Widget",
                href: "https://widget.torque.fi",
              },
            ],
          },
          {
            title: "Concepts",
            items: [
              {
                label: "Engines",
                href: "/main/overview/engines",
              },
              {
                label: "Exchange",
                href: "/main/overview/dex",
              },
              {
                label: "Rewards",
                href: "/main/overview/rewards",
              },
            ],
          },
          {
            title: "Guides",
            items: [
              {
                label: "Getting Started",
                href: "/main/overview/intro",
              },
              {
                label: "How to Trade",
                href: "/main/overview/dex",
              },
              {
                label: "How to Provide Liquidity",
                href: "/main/overview/engines",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "Ecosystem",
                href: "/main/overview/intro",
              },
              {
                label: "Interfaces",
                href: "/main/resources/interfaces",
              },
              {
                label: "Addresses",
                href: "/main/contracts/addresses",
              },
              {
                label: "Security",
                href: "/main/resources/security",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://bit.ly/torq-disc",
              },
              {
                label: "Telegram",
                href: "https://t.me/torquefi",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/torquefi",
              },
              {
                label: "Blog",
                href: "https://blog.torque.fi",
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
