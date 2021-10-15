import { ThemeName } from './types';

export const darkTheme = {
    name: ThemeName.DARK,
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

export const lightTheme = {
    name: ThemeName.LIGHT,
    color: {
        primary: {
            start: '#8E9AFF',
            end: '#CA71EA',
            gradient: 'linear-gradient(135deg, rgba(142,154,255,1) 0%, rgba(202,113,234,1) 100%)',
        },
        body: '#FFFFFF',
        onBody: {
            highEmphasis: 'rgba(38, 38, 38, 0.95)',
            mediumEmphasis: 'rgba(38, 38, 38, 0.7)',
            lowEmphasis: 'rgba(38, 38, 38, 0.3)',
            placeholder: 'rgba(38, 38, 38, 0.15)',
        },
    },
    shadow: {
        default: '0px 0px 16px 0px rgba(142, 154, 255, 0.33)',
        large: '0px 0px 32px 0px rgba(142, 154, 255, 0.33)',
    },
};

export const baseTheme = {
    typography: {
        fonts: '"Inter variable", -apple-system, "Helvetica Neue", "Arial", sans-serif',
    },
};
