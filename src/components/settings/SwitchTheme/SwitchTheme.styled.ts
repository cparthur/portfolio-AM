import styled, { css } from 'styled-components';

import { ThemeName } from 'styles/Theme/types';

type SwitchThemeProps = {
    themeName: ThemeName;
};

export const SwitchTheme = styled.button<SwitchThemeProps>`
    display: flex;
    align-items: center;
    margin: 2rem 0 0 auto;
    width: 4.5rem;
    border-style: solid;
    border-width: 0.0625rem;
    border-radius: 2rem;

    & .icon {
        width: 2rem;
        height: 2rem;
    }

    ${({ themeName }) =>
        themeName === ThemeName.DARK
            ? css`
                  justify-content: flex-start;
                  border-color: ${({ theme }) => theme.color.primary.start};

                  & .icon {
                      fill: ${({ theme }) => theme.color.primary.start};
                  }
              `
            : css`
                  justify-content: flex-end;
                  border-color: ${({ theme }) => theme.color.primary.start};

                  & .icon {
                      fill: ${({ theme }) => theme.color.primary.start};
                  }
              `}
`;
