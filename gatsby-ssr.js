import React from 'react';

import { wrapRootElement as wrapRoot } from './src/gatsbyRootWrapper';
import { wrapPageElement as wrapPage } from './src/gatsbyPageWrapper';

export const wrapRootElement = wrapRoot;
export const wrapPageElement = wrapPage;

const ThemeScriptTag = () => {
    const codeToRunOnClient = `
        (function() {
            try {
                var mode = localStorage.getItem('color-mode');
                var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                if (!mode && supportDarkMode) document.documentElement.classList.add('theme-dark');
                if (!mode) return;
                document.documentElement.classList.add('theme-' + mode);
            } catch (e) {} })()
    `;

    return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};
export const onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents(<ThemeScriptTag key="theme script" />);
};
