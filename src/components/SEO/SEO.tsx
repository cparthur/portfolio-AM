/*
 * Feel free to use this component directly in page to override default SEO.
 * You can also use only FacebookSEO or TwitterSEO to only override the one you want.
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';
import FacebookSEO from './FacebookSEO';
import TwitterSEO from './TwitterSEO';

export interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    article?: boolean;
}

const SEO: React.FC<SEOProps> = ({ title = null, description = null, image = null, article = false }) => {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);

    const { siteUrl, titleTemplate, defaultTitle, defaultDescription, defaultImage, author, siteLanguage } =
        site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || ''}`,
        author,
    };

    return (
        <>
            <Helmet title={seo.title} titleTemplate={titleTemplate}>
                <html lang={siteLanguage} />
                <meta name="author" content={seo.author} />
                <meta name="description" content={seo.description} />
                <meta name="image" content={seo.image} />
            </Helmet>
            <FacebookSEO
                type={article ? 'article' : 'website'}
                url={seo.url}
                title={seo.title}
                desc={seo.description}
                image={seo.image}
            />
            <TwitterSEO title={seo.title} image={seo.image} desc={seo.description} />
        </>
    );
};

export default SEO;

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                siteUrl
                titleTemplate
                defaultTitle: title
                defaultDescription: description
                defaultImage: logo
                author
                siteLanguage
            }
        }
    }
`;
