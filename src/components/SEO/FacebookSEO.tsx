import React from 'react';
import { Helmet } from 'react-helmet';

type FacebookSEOProps = {
    name?: string;
    type: string;
    url: string;
    title: string;
    desc: string;
    image: string;
};

const FacebookSEO: React.FC<FacebookSEOProps> = ({ name = null, type = 'website', url, title, desc, image }) => (
    <Helmet>
        {name && <meta property="og:site_name" content={name} />}
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={desc} />
    </Helmet>
);

export default FacebookSEO;
