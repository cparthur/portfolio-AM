import { createGlobalStyle } from 'styled-components';

import InterSubset from '../assets/fonts/Inter-subset.woff2';

import reset from './reset';

export default createGlobalStyle`
/* Font declarations */
    @font-face {
        font-family: 'Inter variable';
        src: url(${InterSubset}) format('woff2 supports variations'), url(${InterSubset}) format('woff2-variations');
        font-stretch: 25% 150%;
        font-weight: 1 999;
        font-style: oblique 0deg 10deg;
        font-display: swap;
    }

    /* Reset browser styles */
    ${reset}

    /* Global generic styles */
    html {
        font-size: 16px;
        scroll-behavior: smooth;
    }
    body {
        font-family: ${({ theme }) => theme.typography.fonts};
        color: ${({ theme }) => theme.color.onBody.highEmphasis};
        background-color: ${({ theme }) => theme.color.body};
    }
`;
