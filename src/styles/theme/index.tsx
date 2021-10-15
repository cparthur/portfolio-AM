import { DefaultTheme } from 'styled-components';

const dark = {
    theme: 'dark',
    color: {
        primary: {
            start: '#26FF97',
        },
        body: '#141414',
        onBody: {
            highEmphasis: 'rgba(241, 241, 241, 0.95)',
            mediumEmphasis: 'rgba(241, 241, 241, 0.7)',
            lowEmphasis: 'rgba(241, 241, 241, 0.4)',
            placeholder: 'rgba(241, 241, 241, 0.2)',
        },
    },
    shadow: {
        default: '0px 0px 16px 0px rgba(38, 255, 151, 0.5)',
        large: '0px 0px 32px 0px rgba(38, 255, 151, 0.15)',
    },
};

const light = {
    theme: 'light',
    color: {
        primary: {
            start: '#8E9AFF',
            end: '#CA71EA',
        },
        body: '#FFFFFF',
        onBody: {
            highEmphasis: 'rgba(38, 38, 38, 1)',
            mediumEmphasis: 'rgba(38, 38, 38, 0.7)',
            lowEmphasis: 'rgba(38, 38, 38, 0.3)',
            placeholder: 'rgba(38, 38, 38, 0.15)',
        },
    },
    shadow: {
        default: '0px 0px 16px 0px rgba(142, 154, 255, 0.5)',
        large: '0px 0px 32px 0px rgba(142, 154, 255, 0.33)',
    },
};

const mainTheme = {
    typography: {
        fonts: '"Inter variable", -apple-system, "Helvetica Neue", "Arial", sans-serif',
    },
};

const theme: DefaultTheme = { ...mainTheme, ...dark };

export default theme;
