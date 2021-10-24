import styled from 'styled-components';

export const SwitchLang = styled.div`
    display: flex;
    align-items: center;
`;

export const Language = styled.button`
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.color.onBody.lowEmphasis};

    &:last-child {
        margin-right: -1rem;
    }
`;

export const Separator = styled.div`
    height: 1rem;
    width: 1px;
    margin: auto;
    background-color: ${({ theme }) => theme.color.onBody.lowEmphasis};
`;
