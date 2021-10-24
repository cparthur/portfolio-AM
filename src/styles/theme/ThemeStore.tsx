import React, { useState } from 'react';
import { DefaultTheme } from 'styled-components';

import { baseTheme, darkTheme, lightTheme } from './themeData';
import { ThemeName } from './types';

const ThemeContext = React.createContext({} as any);

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
