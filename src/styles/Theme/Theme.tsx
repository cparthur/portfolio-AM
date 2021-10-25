import React, { useContext, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import SvgLightGradient from './SvgLightGradient';
import { ThemeContext } from './ThemeStore';
import themeData from './themeData';

const Theme: React.FC = ({ children }) => {
    const { theme } = useContext(ThemeContext);

    const renderedTheme = useMemo(() => ({ ...themeData, name: theme }), [theme]);

    return (
        <ThemeProvider theme={renderedTheme}>
            {theme === 'light' && <SvgLightGradient />}
            {children}
        </ThemeProvider>
    );
};

export default Theme;
