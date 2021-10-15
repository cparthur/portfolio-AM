import styled from 'styled-components';

import Typography from 'library/typography/Typography';
import media from 'styles/media';

export const AboutContainer = styled.main`
    margin: auto 0;
    padding-top: 2rem; /* This number is correlated to DefaultLayoutHeader padding-bottom */

    ${media.tablet} {
        max-width: 32rem;
        margin: 0 auto auto;
        padding-top: 1.5rem;
    }

    ${media.laptopS} {
        max-width: 40rem;
    }

    ${media.laptopL} {
        max-width: 64%;
        padding: 16rem 0;
    }

    ${media.desktop} {
        max-width: 45rem;
        margin: auto;
    }
`;

export const AboutText = styled(Typography)`
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.65;
    color: ${({ theme }) => theme.color.onBody.mediumEmphasis};
`;

export const AboutSubtitle = styled(Typography)`
    margin: 4rem 0 1.5rem;
    font-size: 1.75rem;

    ${media.desktop} {
        font-size: 1.625rem;
    }
`;
