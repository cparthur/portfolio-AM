import React from 'react';
import { GatsbyBrowser } from 'gatsby';

import SEO from 'components/SEO';
import GlobalStyle from 'styles/GlobalStyle';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => (
    <>
        <GlobalStyle />
        <SEO />
        {element}
    </>
);
