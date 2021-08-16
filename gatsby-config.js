module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.yourdomain.tld',
        title: 'Arthur Molinos Gatsby boilerplate',
        titleTemplate: '%s · Gatsby Starter', //Change "Gatsby Starter" by whatever you want to see next to the page title
        description: 'A typescript & styled-components Gatsby Starter which includes basic theme and UI components',
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
