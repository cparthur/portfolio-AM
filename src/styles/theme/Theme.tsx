import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/GlobalStyle';
import { ThemeContext } from './ThemeStore';

const Theme: React.FC = ({ children }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

export default Theme;
