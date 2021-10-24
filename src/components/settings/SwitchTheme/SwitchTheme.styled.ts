import styled, { css } from 'styled-components';

type SwitchThemeProps = {
    themeName: 'dark' | 'light';
};

export const SwitchTheme = styled.button<SwitchThemeProps>`
    display: flex;
    align-items: center;
    margin: 2.5rem 0 0 auto;
    width: 4.5rem;
    border-style: solid;
    border-width: 0.0625rem;
    border-radius: 2rem;

    & .icon {
        width: 2rem;
        height: 2rem;
    }

    ${({ themeName }) =>
        themeName === 'dark'
            ? css`
                  border-color: ${({ theme }) => theme.color.primary.start};

                  & .icon {
                      fill: ${({ theme }) => theme.color.primary.start};
                  }
              `
            : css`
                  border-color: ${({ theme }) => theme.color.primary.start};

                  & .icon {
                      fill: ${({ theme }) => theme.color.primary.start};
                  }
              `}
`;
