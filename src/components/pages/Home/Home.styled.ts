import styled from 'styled-components';

import Typography from 'library/typography/Typography';
import media from 'styles/media';

export const HomeContainer = styled.main`
    margin: auto 0;
    padding-top: 2rem;

    ${media.tablet} {
        margin: 3rem 0 auto;
        padding-top: 0.5rem;
    }

    ${media.laptopS} {
        margin: auto 0;
    }

    ${media.laptopL} {
        padding-top: 0;
    }
`;

export const HeyText = styled.div`
    display: flex;
    margin-bottom: 1rem;
    font-size: 1.75rem;

    & .lib-Typography {
        color: ${({ theme }) => theme.color.onBody.lowEmphasis};
    }

    & .emoji {
        margin-left: 0.5rem;
    }

    ${media.desktop} {
        margin-bottom: 1.5rem;
        font-size: 2rem;
    }
`;

export const Title = styled(Typography)`
    font-size: 1.75rem;
    line-height: 1.3;

    ${media.desktop} {
        font-size: 2rem;
    }
`;

export const Separator = styled.div`
    height: 1px;
    width: 2rem;
    margin: 4rem 0;
    background-color: ${({ theme }) => theme.color.onBody.mediumEmphasis};

    ${media.tablet} {
        margin: 2.5rem 0;
    }

    ${media.desktop} {
        margin: 3rem 0;
    }
`;

export const PositionText = styled(Typography)`
    font-size: 1.125rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.onBody.mediumEmphasis};

    ${media.tablet} {
        max-width: 22rem;
    }

    ${media.desktop} {
        max-width: 26rem;
        font-size: 1.25rem;
    }
`;
