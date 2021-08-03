module.exports = {
    siteMetadata: {
        title: 'gatsby-CMS-boilerplate',
        description: 'your site description',
        siteUrl: 'https://www.yourdomain.tld',
        keywords: ['gatsby', 'starter', 'any', 'thing'],
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
