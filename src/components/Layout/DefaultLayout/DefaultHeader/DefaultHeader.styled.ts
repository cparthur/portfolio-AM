import styled from 'styled-components';
import { Link } from 'gatsby';

import media from 'styles/media';

export const DefaultHeaderContainer = styled.header`
    display: flex;
    padding: 2rem 0;

    ${media.tablet} {
        padding: 4rem 0 2.5rem;
    }

    ${media.laptopL} {
        position: fixed;
        width: 64%; /* This number is correlated to DefaultLayout max-width */
        padding: 5rem 0 4rem;
        pointer-events: none;
    }

    ${media.desktop} {
        padding: 6rem 0 3rem;
    }

    & #default-header-home-link {
        display: flex;
        pointer-events: initial;
    }

    & .logo-dark {
        width: 6rem;
        height: 6rem;
        margin-right: auto;

        ${media.desktop} {
            width: 7rem;
            height: 7rem;
        }
    }
`;

export const DefaultHeaderMenu = styled.nav`
    margin: auto 0 auto auto;
    pointer-events: initial;
`;

export const DefaultHeaderMenuItem = styled(Link)`
    position: relative;
    display: block;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.color.onBody.mediumEmphasis};

    &:hover {
        font-size: 1.25rem;
        color: ${({ theme }) => theme.color.onBody.highEmphasis};
    }

    &.header-menu-item-active {
        color: ${({ theme }) => theme.color.onBody.highEmphasis};

        &::after {
            content: '';
            position: absolute;
            bottom: -0.125rem;
            left: 0;
            right: 0;
            height: 0.125rem;
            background: ${({ theme }) =>
                theme.color.primary.gradient !== undefined ? theme.color.primary.gradient : theme.color.primary.start};
        }
    }
`;
