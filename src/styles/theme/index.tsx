import { DefaultTheme } from 'styled-components';

const dark = {
    theme: 'dark',
    color: {
        primary: {
            start: '#26FF97',
        },
        body: '#1A1A1A',
        onBody: {
            highEmphasis: 'rgba(241, 241, 241, 1)',
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
        fonts: '"-apple-system", "Helvetica Neue", "Arial", sans-serif',
        h2: {
            fontFamily: 'sans-serif',
            fontSize: '3.75em',
            fontWeight: '400',
            lineHeight: '1.2',
            letterSpacing: '-0.03125em',
        },
        h3: {
            fontFamily: 'sans-serif',
            fontSize: '3.5em',
            fontWeight: '600',
            lineHeight: '1.16666',
            letterSpacing: '0',
        },
        h4: {
            fontFamily: 'sans-serif',
            fontSize: '2.125em',
            fontWeight: '500',
            lineHeight: '1.1765',
            letterSpacing: '0.015625em',
        },
        h5: {
            fontFamily: 'sans-serif',
            fontSize: '1.5em',
            fontWeight: '600',
            lineHeight: '1.5',
        },
        h6: {
            fontFamily: 'sans-serif',
            fontSize: '1.25em',
            fontWeight: '500',
            letterSpacing: '0.015625em',
            lineHeight: '1.2',
        },
        subtitle1: {
            fontFamily: 'sans-serif',
            fontSize: '1em',
            fontWeight: '600',
            letterSpacing: '0.009375em',
            lineHeight: '1.5',
        },
        subtitle2: {
            fontFamily: 'sans-serif',
            fontSize: '0.875em',
            fontWeight: '600',
            letterSpacing: '0.00625em',
            lineHeight: '1.43',
        },
        body1: {
            fontFamily: 'sans-serif',
            fontSize: '1em',
            fontWeight: '400',
            letterSpacing: '0.015625em',
            lineHeight: '1.5',
        },
        body2: {
            fontFamily: 'sans-serif',
            fontSize: '0.875em',
            fontWeight: '400',
            letterSpacing: '0.015625em',
            lineHeight: '1.43',
        },
        button: {
            fontFamily: 'sans-serif',
            fontSize: '0.875em',
            fontWeight: '600',
            letterSpacing: '0.078125em',
            lineHeight: '1.14',
            textTransform: 'uppercase',
        },
        caption: {
            fontFamily: 'sans-serif',
            fontSize: '0.75em',
            fontWeight: '500',
            letterSpacing: '0.025em',
            lineHeight: '1.33',
        },
        overline: {
            fontFamily: 'sans-serif',
            fontSize: '0.625em',
            fontWeight: '600',
            letterSpacing: '0.125em',
            lineHeight: '1.6',
        },
    },
};

const theme: DefaultTheme = { ...mainTheme, ...dark };

export default theme;
