import styled, { css } from 'styled-components';

import { ThemeName } from 'styles/Theme/ThemeStore';

type SwitchThemeProps = {
    themeName: ThemeName;
};

export const SwitchThemePlaceholder = styled.button`
    margin: 2rem 0 0 auto;
    height: 2rem;
    width: 4.5rem;
    border-style: solid;
    border-width: 1px;
    border-radius: 2rem;
    border-color: ${({ theme }) => theme.color.onBody.placeholder};
`;

export const SwitchTheme = styled(SwitchThemePlaceholder)<SwitchThemeProps>`
    position: relative;
    display: flex;
    align-items: center;

    & .icon {
        width: 2rem;
        height: 2rem;
        fill: ${({ theme }) => theme.color.primary.start};
    }

    ${({ themeName }) =>
        themeName === ThemeName.DARK
            ? css`
                  justify-content: flex-start;
                  border-color: ${({ theme }) => theme.color.primary.start};
              `
            : css`
                  justify-content: flex-end;
                  box-sizing: border-box;
                  background: ${({ theme }) => theme.color.body};
                  background-clip: padding-box;
                  border-color: transparent;

                  &:before {
                      content: '';
                      position: absolute;
                      top: 0;
                      right: 0;
                      bottom: 0;
                      left: 0;
                      margin: -1px;
                      border-radius: inherit;
                      background: ${({ theme }) => theme.color.primary.gradient};
                      z-index: -1;
                  }
              `}
`;
