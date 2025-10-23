import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'IFC 2026',
  tagline: 'International FAUST Conference 2026 - Cannes - France\n28-29 May | Opening 9:30 AM - Closing 7:30 PM',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://micbuffa.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/IFC2026website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'micbuffa', // Usually your GitHub org/user name.
  projectName: 'IFC2026website', // Usually your repo name.
 trailingSlash: false,                // optional, but common
  deploymentBranch: 'gh-pages',        // default, can be omitted but explicit is nice
  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/micbuffa/IFC2026website',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'IFC2026',
      logo: {
        alt: 'My Site Logo',
      src: 'img/ifc24_cyan.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'CfP',
        },
        {to: '/docs/dates', label: 'Important Dates', position: 'left'},
        {to: '/docs/program', label: 'Program', position: 'left'},
        {to: '/docs/keynotes', label: 'Keynotes', position: 'left'},

        {to: '/docs/committees', label: 'Committees', position: 'left'},
        {to: '/docs/registration', label: 'Registration', position: 'left'},
        {to: '/docs/venue', label: 'Venue', position: 'left'},
        {to: '/docs/codeofconduct', label: 'Code of conduct', position: 'left'},



      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Contacts',
          items: [
            {
              label: 'Email',
              href: 'mailto:michel.buffa@univ-cotedazur.fr',
            }
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'GitHub of this site',
              href: 'https://github.com/micbuffa/IFC2026website',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
