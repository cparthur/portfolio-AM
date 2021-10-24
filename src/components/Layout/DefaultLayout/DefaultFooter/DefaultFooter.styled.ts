import styled from 'styled-components';

import media from 'styles/media';

export const DefaultFooterContainer = styled.footer`
    display: flex;
    margin: 5rem 0 2rem;

    ${media.tablet} {
        margin: 5rem 0 4rem;
    }

    ${media.laptopL} {
        position: fixed;
        bottom: 2.5rem;
        left: 3rem;
        right: 3rem;
        margin: 0;
        pointer-events: none;
    }

    ${media.desktop} {
        bottom: 4rem;
        left: 4rem;
        right: 4rem;
    }
`;
