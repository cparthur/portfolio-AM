import styled from 'styled-components';

import media from 'styles/media';

export const DefaultLayoutContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0 2rem;

    ${media.tablet} {
        margin: 0 4rem;
    }

    ${media.laptop} {
        margin: 0 8rem;
    }

    ${media.laptopL} {
        max-width: 64%;
        margin: 0 auto;
    }

    ${media.desktop} {
        margin: 0 auto;
    }

    & #background-vector {
        position: fixed;
        left: 0;
        right: 0;
        top: 20vh;
        height: 90vh;
        width: 100%;
        z-index: -1;

        & path {
            stroke: ${({ theme }) => theme.color.onBody.placeholder};
            stroke-opacity: 0.5;
        }

        ${media.tablet} {
            height: 50vh;
        }

        ${media.laptop} {
            height: 70vh;
        }
    }
`;
