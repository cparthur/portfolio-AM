import React from 'react';
import { Helmet } from 'react-helmet';

type TwitterSEOProps = {
    type?: string;
    username?: string;
    title: string;
    desc: string;
    image: string;
};

const TwitterSEO: React.FC<TwitterSEOProps> = ({ type = 'summary', username = null, title, desc, image }) => (
    <Helmet>
        {username && <meta name="twitter:creator" content={username} />}
        <meta name="twitter:card" content={type} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:image:alt" content={desc} />
    </Helmet>
);

export default TwitterSEO;
