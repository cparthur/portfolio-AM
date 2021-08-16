import React from 'react';
import { GatsbyBrowser } from 'gatsby';

import SEO from 'components/SEO';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => (
    <>
        <SEO />
        {element}
    </>
);
