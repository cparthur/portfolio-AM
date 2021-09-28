import styled from 'styled-components';

export const SwitchLang = styled.div`
    display: flex;
    align-items: center;
`;

export const Language = styled.button`
    color: ${({ theme }) => theme.color.onBody.lowEmphasis};
`;

export const Separator = styled.div`
    height: 16px;
    width: 1px;
    margin: auto 1.25rem;
    background-color: ${({ theme }) => theme.color.onBody.lowEmphasis};
`;
