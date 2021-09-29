import styled from 'styled-components';
import { Link } from 'gatsby';

import media from 'styles/media';

export const DefaultHeaderContainer = styled.header`
    display: flex;
    padding: 2rem 0 2.5rem;

    ${media.tablet} {
        padding: 4rem 0 2.5rem;
    }

    ${media.laptopL} {
        position: fixed;
        width: 64%; /* This number is correlated to DefaultLayout max-width */
        padding: 5rem 0 4rem;
    }

    ${media.desktop} {
        padding: 6rem 0 3rem;
    }

    & .logo-dark {
        width: 5rem;
        height: 5rem;
        margin-right: auto;

        ${media.tablet} {
            width: 6rem;
            height: 6rem;
        }

        ${media.desktop} {
            width: 7rem;
            height: 7rem;
        }
    }
`;

export const DefaultHeaderMenu = styled.nav`
    margin: auto 0 auto auto;
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
            bottom: -0.25rem;
            left: 0;
            right: 0;
            height: 0.125rem;
            background-color: ${({ theme }) => theme.color.primary.start};
        }
    }
`;
