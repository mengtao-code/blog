import {themes as prismThemes} from 'prism-react-renderer'
import type {Config} from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const baseUrl = process.env.BASE_URL ?? '/'
const url = process.env.URL ?? 'https://www.mengtaoxin.com'

const config: Config = {
    title: 'mengtao的博客',
    tagline: '写博客很酷',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://mengtao-code.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: baseUrl,

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'mengtao-code', // Usually your GitHub org/user name.
    projectName: 'blog', // Usually your repo name.
    trailingSlash: false,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans']
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts'
                },
                blog: {
                    showReadingTime: false,
                    blogSidebarTitle: '最近博客'
                },
                theme: {
                    customCss: './src/css/custom.css'
                }
            } satisfies Preset.Options
        ]
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: '主页',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg'
            },
            items: [
                {to: baseUrl + 'blog', label: '博客', position: 'left'},
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: '文档'
                },
                {to: baseUrl + 'mini-posts', label: '碎碎念', position: 'left'},
                {
                    href: 'https://github.com/mengtao-code/blog',
                    label: 'GitHub',
                    position: 'right'
                },
                {
                    href: `${url}/rss.xml`,
                    label: 'RSS',
                    position: 'right'
                }
            ]
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: '地址',
                    items: [
                        {
                            label: '文档',
                            to: '/docs'
                        }
                    ]
                },
                {
                    title: '写的玩具项目',
                    items: [
                        {
                            label: '油猴脚本',
                            href: 'https://github.com/mengtao-code/tampermonkey-scripts'
                        }
                    ]
                },
                {
                    title: '本站依赖的库',
                    items: [
                        {
                            label: 'Docusaurus',
                            href: 'https://docusaurus.io/'
                        },
                        {
                            label: 'React',
                            href: 'https://react.dev/'
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Blog, Inc.`
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula
        }
    } satisfies Preset.ThemeConfig
}

export default config
