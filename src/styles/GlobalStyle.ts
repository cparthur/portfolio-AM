import { createGlobalStyle } from 'styled-components';

import media from './media';
import reset from './reset';

import InterSubset from '../assets/fonts/Inter-subset.woff2';
import 'simplebar-react/dist/simplebar.min.css';

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
        background-color: ${({ theme }) => theme.color.body};

        ${media.infinite} {
            font-size: 0.7vw;
        }
    }

    body {
        font-family: ${({ theme }) => theme.typography.fonts};
        color: ${({ theme }) => theme.color.onBody.highEmphasis};
        background-color: ${({ theme }) => theme.color.body};
    }

    /* SimpleBar custom properties */
    & .simplebar-track.simplebar-vertical {
        width: 0.5rem;

        ${media.laptopS} {
            width: 0.75rem;
        }
    }

    & .simplebar-track.simplebar-horizontal {
        height: 0.5rem;

        ${media.laptopS} {
            height: 0.75rem;
        }
    }

    & .simplebar-scrollbar:before {
        background: ${({ theme }) => theme.color.primary.start};
    }

    & .simplebar-scrollbar.simplebar-visible:before {
        opacity: 0.25;

        ${media.laptopS} {
            opacity: 0.5;
        }
    }
`;
