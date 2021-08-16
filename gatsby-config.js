const {
    NODE_ENV,
    URL: NETLIFY_SITE_URL = 'https://www.example.com',
    DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
    CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
    siteMetadata: {
        siteUrl: siteUrl,
        title: 'Arthur Molinos Gatsby boilerplate',
        titleTemplate: '%s · Gatsby Starter', //Change "Gatsby Starter" by whatever you want to see next to the page title
        description:
            'A typescript & styled-components Gatsby Starter which includes basic theme and UI components. SEO compliant and ready to be deployed with Netlify',
        logo: '/images/logo-1024.png',
        author: 'Arthur Molinos',
        siteLanguage: 'en',
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                resolveEnv: () => NETLIFY_ENV,
                env: {
                    production: {
                        policy: [{ userAgent: '*' }],
                    },
                    'branch-deploy': {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                        sitemap: null,
                        host: null,
                    },
                    'deploy-preview': {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                        sitemap: null,
                        host: null,
                    },
                },
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    src: 'src',
                    components: 'src/components',
                    library: 'src/components/library',
                    styles: 'src/styles',
                },
                extensions: [],
            },
        },
    ],
};
