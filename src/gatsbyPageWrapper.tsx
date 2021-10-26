import React from 'react';
import { GatsbyBrowser } from 'gatsby';

import SEO from 'components/SEO';
import { ThemeStore } from 'styles/Theme/ThemeStore';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => (
    <ThemeStore>
        <SEO />
        {element}
    </ThemeStore>
);
