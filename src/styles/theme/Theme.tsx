import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/GlobalStyle';
import SvgLightGradient from './SvgLightGradient';
import { ThemeContext } from './ThemeStore';

const Theme: React.FC = ({ children }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme}>
            {theme.name === 'light' && <SvgLightGradient />}
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

export default Theme;
