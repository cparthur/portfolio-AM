import React from 'react';
import { GatsbyBrowser } from 'gatsby';

import SEO from 'components/SEO';
import Theme from 'styles/Theme';
import GlobalStyle from 'styles/GlobalStyle';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => (
    <>
        <GlobalStyle />
        <Theme>
            <SEO />
            {element}
        </Theme>
    </>
);
