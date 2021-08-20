module.exports = {
    siteMetadata: {
        siteUrl: 'https://yoursite.com',
        title: 'Gatsby starter',
        titleTemplate: '%s · Arthur Molinos', //Change "Arthur Molinos" by whatever you want to see next to any page title
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
            options: {},
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
        'gatsby-plugin-netlify',
    ],
};
