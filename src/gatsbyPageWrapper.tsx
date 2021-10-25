import React from 'react';
import { GatsbyBrowser } from 'gatsby';

import SEO from 'components/SEO';
import Theme from 'styles/Theme';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => (
    <>
        <Theme>
            <SEO />
            {element}
        </Theme>
    </>
);
