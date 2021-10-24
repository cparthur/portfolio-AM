/*
 * Add global component to the project
 * This code is imported in gatsby-browser.js and gatsby-srr.js, just to keep things DRY
 */
import React from 'react';
import { GatsbyBrowser } from 'gatsby';

import './i18n/i18n';

import { ThemeStore } from 'styles/Theme/ThemeStore';
import Theme from 'styles/Theme';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => (
    <ThemeStore>
        <Theme>{element}</Theme>
    </ThemeStore>
);
