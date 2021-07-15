/*
 * Add global component to the project
 * This code is imported in gatsby-browser.js and gatsby-srr.js, just to keep things DRY
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './src/styles/GlobalStyle';
import theme from './src/styles/theme';

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {element}
    </ThemeProvider>
);
