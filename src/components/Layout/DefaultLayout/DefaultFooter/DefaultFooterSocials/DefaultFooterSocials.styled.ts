import styled from 'styled-components';

import { ThemeName } from 'styles/Theme/ThemeStore';

export const Socials = styled.div`
    margin-right: auto;
    pointer-events: initial;
`;

export const Social = styled.a`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    &:last-child {
        margin-bottom: 0;
    }

    & .icon {
        fill: ${({ theme }) => theme.name === ThemeName.DARK && theme.color.onBody.highEmphasis};
        margin-right: 0.5rem;
    }

    & .lib-Typography {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.color.onBody.mediumEmphasis};
    }

    &:hover {
        & .lib-Typography {
            color: ${({ theme }) => theme.color.onBody.highEmphasis};
        }
    }
`;
