import { createGlobalStyle, css } from 'styled-components';

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
        /* CSS variables */
        &.theme-dark {
            --theme-colors-primary-start: #26FF97;

            --theme-colors-body: #141414;

            --theme-colors-onBody-highEmphasis: rgba(241, 241, 241, 0.95);
            --theme-colors-onBody-mediumEmphasis: rgba(241, 241, 241, 0.7);
            --theme-colors-onBody-lowEmphasis: rgba(241, 241, 241, 0.4);
            --theme-colors-onBody-placeholder: rgba(241, 241, 241, 0.2);

            --theme-shadow-default: 0px 0px 16px 0px rgba(38, 255, 151, 0.5);
            --theme-shadow-large: 0px 0px 32px 0px rgba(38, 255, 151, 0.15);
        }

        &.theme-light {
            --theme-colors-primary-start: #8E9AFF;
            --theme-colors-primary-end: #CA71EA;
            --theme-colors-primary-gradient: linear-gradient(135deg, rgba(142,154,255,1) 0%, rgba(202,113,234,1) 100%);

            --theme-colors-body: #FFFFFF;

            --theme-colors-onBody-highEmphasis: rgba(38, 38, 38, 0.95);
            --theme-colors-onBody-mediumEmphasis: rgba(38, 38, 38, 0.7);
            --theme-colors-onBody-lowEmphasis: rgba(38, 38, 38, 0.3);
            --theme-colors-onBody-placeholder: rgba(38, 38, 38, 0.15);

            --theme-shadow-default: 0px 0px 16px 0px rgba(142, 154, 255, 0.33);
            --theme-shadow-large: 0px 0px 32px 0px rgba(142, 154, 255, 0.33);
        }

        font-size: 16px;
        scroll-behavior: smooth;
        background-color: ${({ theme }) => theme.color.body};

        transition: ${({ theme }) => theme.transition.theme};

        ${media.infinite} {
            font-size: 0.7vw;
        }
    }

    body {
        font-family: ${({ theme }) => theme.typography.fonts};
        color: ${({ theme }) => theme.color.onBody.highEmphasis};
    }

    .icon-gradient {
        ${({ theme }) =>
            theme.name === 'light' &&
            css`
                fill: url('#svg-light-gradient') !important;
            `}
    }

    /* SimpleBar custom properties */
    .simplebar-track.simplebar-vertical {
        width: 0.5rem;
    }

    .simplebar-track.simplebar-horizontal {
        height: 0.5rem;

        ${media.laptopS} {
            height: 0.75rem;
        }
    }

    .simplebar-scrollbar:before {
        background: ${({ theme }) => theme.color.primary.start};
    }

    .simplebar-scrollbar.simplebar-visible:before {
        opacity: 0.25;

        ${media.laptopS} {
            opacity: 0.5;
        }
    }
`;
