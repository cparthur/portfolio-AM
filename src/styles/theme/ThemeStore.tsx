import React, { useEffect, useState } from 'react';

import { ThemeName } from './types';

function getInitialColorMode(): ThemeName {
    const persistedColorPreference = typeof window !== 'undefined' && window.localStorage.getItem('color-mode');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';
    // If the user has explicitly chosen light or dark,
    // let's use it. Otherwise, this value will be null.
    if (hasPersistedPreference) {
        return persistedColorPreference as ThemeName;
    }
    // If they haven't been explicit, let's check the media
    // query
    const mql = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = mql && typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
        return mql.matches ? ThemeName.DARK : ThemeName.LIGHT;
    }
    // If they are using a browser/OS that doesn't support
    // color themes, let's default to 'light'.
    return 'dark' as ThemeName;
}

interface ThemeContextTypes {
    switchTheme: (themeName: ThemeName) => void;
    theme: ThemeName;
}

const ThemeContext = React.createContext<ThemeContextTypes>({} as ThemeContextTypes);

const ThemeStore: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<ThemeName>(getInitialColorMode);

    useEffect(() => {
        if (theme === ThemeName.DARK) {
            document.documentElement.classList.remove('theme-light');
            document.documentElement.classList.add('theme-dark');
        }
        if (theme === ThemeName.LIGHT) {
            document.documentElement.classList.remove('theme-dark');
            document.documentElement.classList.add('theme-light');
        }
    }, [theme]);

    const switchTheme = (themeName: ThemeName) => {
        setTheme(themeName);

        // Persist it on update
        window.localStorage.setItem('color-mode', themeName);
    };

    return <ThemeContext.Provider value={{ switchTheme, theme }}>{children}</ThemeContext.Provider>;
};

export { ThemeStore, ThemeContext };
