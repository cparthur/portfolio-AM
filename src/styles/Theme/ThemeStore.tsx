import React, { useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { COLORS } from 'styles/Theme/constants';
import GlobalStyle from 'styles/GlobalStyle';

export enum ThemeName {
    DARK = 'dark',
    LIGHT = 'light',
}

// If you change, add or remove CSS properties here, don't forget to do it as well bellow, in gatsby-ssr.js and constants.ts
const themeData: DefaultTheme = {
    name: undefined,
    color: {
        primary: {
            start: 'var(--color-primary-start)',
            end: 'var(--color-primary-end)',
            gradient: 'var(--color-primary-gradient)',
        },
        body: 'var(--color-body)',
        onBody: {
            highEmphasis: 'var(--color-onBody-highEmphasis)',
            mediumEmphasis: 'var(--color-onBody-mediumEmphasis)',
            lowEmphasis: 'var(--color-onBody-lowEmphasis)',
            placeholder: 'var(--color-onBody-placeholder)',
        },
    },
    shadow: {
        default: 'var(--shadow-default)',
        large: 'var(--shadow-large)',
    },
    typography: {
        fonts: '"Inter variable", -apple-system, "Helvetica Neue", "Arial", sans-serif',
    },
    transition: {
        theme: '300ms',
    },
};

interface ThemeContextTypes {
    switchTheme: (themeName: ThemeName) => void;
    theme?: ThemeName;
}

const ThemeContext = React.createContext<ThemeContextTypes>({} as ThemeContextTypes);

const ThemeStore: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<ThemeName | undefined>(undefined);

    useEffect(() => {
        const root = window.document.documentElement;
        const initialColorValue = root.style.getPropertyValue('--initial-color-mode') as ThemeName;
        setTheme(initialColorValue);
    }, []);

    const switchTheme = (themeName: ThemeName) => {
        const root = window.document.documentElement;
        // 1. Update React color-mode state
        setTheme(themeName);
        // 2. Update localStorage
        localStorage.setItem('color-mode', themeName);
        // 3. Update each color
        // If you change, add or remove CSS properties here, don't forget to do it as well above, in gatsby-ssr.js and constants.ts
        root.style.setProperty(
            '--color-primary-start',
            themeName === 'light' ? COLORS.primaryStart.light : COLORS.primaryStart.dark,
        );
        root.style.setProperty(
            '--color-primary-end',
            themeName === 'light' ? COLORS.primaryEnd.light : COLORS.primaryEnd.dark,
        );
        root.style.setProperty(
            '--color-primary-gradient',
            themeName === 'light' ? COLORS.primaryGradient.light : COLORS.primaryGradient.dark,
        );
        root.style.setProperty('--color-body', themeName === 'light' ? COLORS.body.light : COLORS.body.dark);
        root.style.setProperty(
            '--color-onBody-highEmphasis',
            themeName === 'light' ? COLORS.onBodyHighEmphasis.light : COLORS.onBodyHighEmphasis.dark,
        );
        root.style.setProperty(
            '--color-onBody-mediumEmphasis',
            themeName === 'light' ? COLORS.onBodyMediumEmphasis.light : COLORS.onBodyMediumEmphasis.dark,
        );
        root.style.setProperty(
            '--color-onBody-lowEmphasis',
            themeName === 'light' ? COLORS.onBodyLowEmphasis.light : COLORS.onBodyLowEmphasis.dark,
        );
        root.style.setProperty(
            '--color-onBody-placeholder',
            themeName === 'light' ? COLORS.onBodyPlaceholder.light : COLORS.onBodyPlaceholder.dark,
        );
        root.style.setProperty(
            '--color-shadow-default',
            themeName === 'light' ? COLORS.shadowDefault.light : COLORS.shadowDefault.dark,
        );
        root.style.setProperty(
            '--color-shadow-large',
            themeName === 'light' ? COLORS.shadowLarge.light : COLORS.shadowLarge.dark,
        );
    };

    return (
        <ThemeContext.Provider value={{ switchTheme, theme }}>
            <ThemeProvider theme={theme ? { ...themeData, name: theme } : themeData}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export { ThemeStore, ThemeContext };
