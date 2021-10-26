import React from 'react';
import { COLORS } from 'styles/Theme/constants';

import { wrapRootElement as wrapRoot } from './src/gatsbyRootWrapper';
import { wrapPageElement as wrapPage } from './src/gatsbyPageWrapper';

const ThemeScriptTag = () => {
    const codeToRunOnClient = `
        (function() {
            function getInitialColorMode() {
                const persistedColorPreference = window.localStorage.getItem('color-mode');
                const hasPersistedPreference = typeof persistedColorPreference === 'string';
                // If the user has explicitly chosen light or dark,
                // let's use it. Otherwise, this value will be null.
                if (hasPersistedPreference) {
                  return persistedColorPreference;
                }
                // If they haven't been explicit, let's check the media
                // query
                const mql = window.matchMedia('(prefers-color-scheme: dark)');
                const hasMediaQueryPreference = typeof mql.matches === 'boolean';
                if (hasMediaQueryPreference) {
                  return mql.matches ? 'dark' : 'light';
                }
                // If they are using a browser/OS that doesn't support
                // color themes, let's default to 'light'.
                return 'light';
            }

            const colorMode = getInitialColorMode();
            const root = document.documentElement;

            // If you change, add or remove CSS properties here, don't forget to do it as well in ThemeStore.tsx and constants.ts

            root.style.setProperty(
                '--color-primary-start',
                colorMode === 'light'
                ? '${COLORS.primaryStart.light}'
                : '${COLORS.primaryStart.dark}'
            );
            root.style.setProperty(
                '--color-primary-end',
                colorMode === 'light'
                ? '${COLORS.primaryEnd.light}'
                : '${COLORS.primaryEnd.dark}'
            );
            root.style.setProperty(
                '--color-primary-gradient',
                colorMode === 'light'
                ? '${COLORS.primaryGradient.light}'
                : '${COLORS.primaryGradient.dark}'
            );
            root.style.setProperty(
                '--color-body',
                colorMode === 'light'
                ? '${COLORS.body.light}'
                : '${COLORS.body.dark}'
            );
            root.style.setProperty(
                '--color-onBody-highEmphasis',
                colorMode === 'light'
                ? '${COLORS.onBodyHighEmphasis.light}'
                : '${COLORS.onBodyHighEmphasis.dark}'
            );
            root.style.setProperty(
                '--color-onBody-mediumEmphasis',
                colorMode === 'light'
                ? '${COLORS.onBodyMediumEmphasis.light}'
                : '${COLORS.onBodyMediumEmphasis.dark}'
            );
            root.style.setProperty(
                '--color-onBody-lowEmphasis',
                colorMode === 'light'
                ? '${COLORS.onBodyLowEmphasis.light}'
                : '${COLORS.onBodyLowEmphasis.dark}'
            );
            root.style.setProperty(
                '--color-onBody-placeholder',
                colorMode === 'light'
                ? '${COLORS.onBodyPlaceholder.light}'
                : '${COLORS.onBodyPlaceholder.dark}'
            );
            root.style.setProperty(
                '--color-shadow-default',
                colorMode === 'light'
                ? '${COLORS.shadowDefault.light}'
                : '${COLORS.shadowDefault.dark}'
            );
            root.style.setProperty(
                '--color-shadow-large',
                colorMode === 'light'
                ? '${COLORS.shadowLarge.light}'
                : '${COLORS.shadowLarge.dark}'
            );
            root.style.setProperty(
                '--typography-fonts',
                '"Inter variable", -apple-system, "Helvetica Neue", "Arial", sans-serif'
            );
            root.style.setProperty(
                '--transition-theme',
                '300ms'
            );

            root.style.setProperty('--initial-color-mode', colorMode);
            })()
    `;

    return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};
export const onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents(<ThemeScriptTag key="theme script" />);
};

export const wrapRootElement = wrapRoot;
export const wrapPageElement = wrapPage;
