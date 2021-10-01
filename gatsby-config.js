module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.arthurmolinos.com',
        title: 'Portfolio',
        titleTemplate: '%s · Arthur Molinos', //Change "Arthur Molinos" by whatever you want to see next to any page title
        description:
            'Product designer and Web developer. I carefully create digital products and experiences that solve people and business needs.',
        logo: '/images/logo-1024.png',
        author: 'Arthur Molinos',
        siteLanguage: 'en',
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-netlify',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src`,
                ignore: [`**/\.*`], // ignore files starting with a dot
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/assets/images/icon.png',
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {},
        },
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
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
    ],
};
