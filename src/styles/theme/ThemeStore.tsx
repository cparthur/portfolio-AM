import React, { useState } from 'react';
import { DefaultTheme } from 'styled-components';

import { baseTheme, darkTheme, lightTheme } from './themeData';
import { ThemeName } from './types';

interface ThemeContextTypes {
    switchTheme: (themeName: ThemeName) => void;
    theme: DefaultTheme;
}

const ThemeContext = React.createContext<ThemeContextTypes>({} as ThemeContextTypes);

const ThemeStore: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<DefaultTheme>({ ...baseTheme, ...darkTheme });

    const switchTheme = (themeName: ThemeName) => {
        if (themeName === ThemeName.DARK) {
            setTheme({ ...baseTheme, ...darkTheme });
        }
        if (themeName === ThemeName.LIGHT) {
            setTheme({ ...baseTheme, ...lightTheme });
        }
    };

    return <ThemeContext.Provider value={{ switchTheme, theme }}>{children}</ThemeContext.Provider>;
};

export { ThemeStore, ThemeContext };
