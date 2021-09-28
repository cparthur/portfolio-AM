import styled from 'styled-components';

import Typography from 'library/typography/Typography';
import media from 'styles/media';

export const DefaultHeaderContainer = styled.header`
    display: flex;
    padding: 2rem 0 4.5rem;

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

    ${media.tablet} {
        padding: 4rem 0 3rem;
    }

    ${media.laptopL} {
        padding: 5rem 0 3rem;
    }

    ${media.desktop} {
        padding: 6rem 0 3rem;
    }
`;

export const DefaultHeaderMenu = styled.nav`
    margin: auto 0 auto auto;
`;

export const DefaultHeaderMenuItem = styled(Typography)`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.color.onBody.mediumEmphasis};
`;
