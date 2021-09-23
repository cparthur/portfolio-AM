import styled from 'styled-components';

import media from 'styles/media';

export const HomeContainer = styled.main`
    padding: 4rem 2rem;

    ${media.laptop} {
        padding: 4rem;
    }

    & .lib-Typography {
        margin-bottom: 1rem;
    }

    & li {
        margin-bottom: 0.5rem;
        list-style: inside;

        & p {
            display: inline;
        }
    }
`;
