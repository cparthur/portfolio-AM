import styled from 'styled-components';

export const SwitchLang = styled.div`
    display: flex;
    align-items: center;
`;

type LanguageProps = {
    isActive: boolean;
};

export const Language = styled.button<LanguageProps>`
    padding: 0.5rem 1rem;

    &:last-child {
        margin-right: -1rem;
    }

    ${({ isActive, theme }) =>
        isActive
            ? {
                  color: theme.color.primary.start,
              }
            : {
                  color: theme.color.onBody.lowEmphasis,
              }}
`;

export const Separator = styled.div`
    height: 1rem;
    width: 1px;
    margin: auto;
    background-color: ${({ theme }) => theme.color.onBody.lowEmphasis};
`;
