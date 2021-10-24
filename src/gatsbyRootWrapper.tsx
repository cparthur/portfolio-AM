/*
 * Add global component to the project
 * This code is imported in gatsby-browser.js and gatsby-srr.js, just to keep things DRY
 */
import React from 'react';
import { GatsbyBrowser } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';

import './i18n/i18n';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => (
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
