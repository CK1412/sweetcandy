// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sweetcandy',
  tagline: 'Sweetcandy are great.',
  favicon: 'img/favicon.ico',

  trailingSlash: false,

  // Set the production url of your site here
  url: 'https://sweetcandy.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // noIndex = true => does not show up in Google search results
  noIndex: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'canhcanh', // Usually your GitHub org/user name.
  projectName: 'sweetcandy', // Usually your repo name.

  deploymentBranch: 'main',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  onDuplicateRoutes: 'warn',

  staticDirectories: ['static'],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    path: 'i18n',
    localeConfigs: {
      vi: {
        label: 'Tiếng Việt',
        direction: 'ltr',
        htmlLang: 'vi-VN',
        calendar: 'gregory',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
      }
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          editUrl:
            'https://github.com/CK1412/sweetcandy/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/CK1412/sweetcandy/tree/main/',
          postsPerPage: 5
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // meta image
      image: 'img/img-sweet-candy.png',
      metadata: [
        { name: 'keywords', content: 'blog, flutter, dart, mobile' }
      ],
      navbar: {
        title: 'Sweetcandy',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: false,
        items: [
          // Config in /sidebars.js
          {
            type: 'docSidebar',
            sidebarId: 'flutterDart',
            position: 'left',
            label: 'Flutter & Dart',
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialBasics',
          //   position: 'left',
          //   label: 'Tutorial Basics',
          // },
          { to: '/blog', label: 'Blog', position: 'left' },
          // i18n feature
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Sweetcandy`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'dart',
      },
    }),
};

module.exports = config;
