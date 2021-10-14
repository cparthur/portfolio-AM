import styled from 'styled-components';
import theme from 'styles/theme';

export const SwitchLang = styled.div`
    display: flex;
    align-items: center;
`;

type LanguageProps = {
    isActive: boolean;
};

export const Language = styled.button<LanguageProps>`
    ${({ isActive }) =>
        isActive
            ? {
                  color: theme.color.primary.start,
              }
            : {
                  color: theme.color.onBody.lowEmphasis,
              }}
`;

export const Separator = styled.div`
    height: 16px;
    width: 1px;
    margin: auto 1.25rem;
    background-color: ${theme.color.onBody.lowEmphasis};
`;
