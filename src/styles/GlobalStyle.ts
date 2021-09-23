import { createGlobalStyle } from 'styled-components';

import reset from './reset';

export default createGlobalStyle`
    /* Reset browser styles */
    ${reset}

    /* Global generic styles */
    html {
        font-size: 16px;
        scroll-behavior: smooth;
    }
    body {
        font-family: ${({ theme }) => theme.typography.fonts};
        color: ${({ theme }) => theme.color.onBody.highEmphasis};
        background-color: ${({ theme }) => theme.color.body};
    }
`;
