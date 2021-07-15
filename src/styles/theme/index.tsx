import { DefaultTheme } from 'styled-components';

const light = {
    color: {
        primary: {
            80: '#FF3674',
            50: '#FF84a7',
            20: '#FFCED8',
        },
        secondary: {
            80: '#4C69D7',
            50: '#7E9AFE',
            20: '#C1CEFF',
        },
        tertiary: {
            black: '#000000',
            white: '#FFFFFF',
            light: '#4F5368',
            dark: '#262B3D',
            background: '#F9F9F9',
        },
        onLight: {
            highEmphasis: 'rgba(38, 43, 61, 0.9)',
            mediumEmphasis: 'rgba(38, 43, 61, 0.7)',
            lowEmphasis: 'rgba(38, 43, 61, 0.35)',
            placeholder: 'rgba(38, 43, 61, 0.17)',
            divider: 'rgba(33, 33, 33, 0.08)',
        },
        onDark: {
            highEmphasis: '#FFFFFF',
            mediumEmphasis: 'rgba(255, 255, 255, 0.7)',
            lowEmphasis: 'rgba(255, 255, 255, 0.4)',
            whiteOverlay: 'rgba(255, 255, 255, 0.12)',
            divider: 'rgba(255, 255, 255, 0.12)',
        },
        miscellaneous: {
            error: '#ED5454',
            confirm: '#36A879',
            selected: {
                primary: 'rgba(255, 54, 116, 0.15)',
                secondary: 'rgba(69, 99, 215, 0.1)',
            },
        },
        additional: {
            red: '#EF5350',
            purple: '#AB47BC',
            indigo: '#5C6BC0',
            blue: '#29B6F6',
            teal: '#26A69A',
            green: '#9CCC65',
            yellow: '#FFEE58',
            orange: '#FFA726',
        },
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
    shadow: {
        low: '1px 3px 24px 1px rgba(38, 43, 61, 0.06)',
        medium: '1px 4px 24px 1px rgba(38, 43, 61, 0.1)',
        high: '1px 5px 24px 1px rgba(38, 43, 61, 0.16)',
        extremelyHigh: '1px 5px 24px 1px rgba(38, 43, 61, 0.32)',
        pinkHigh: '0px 8px 24px rgba(38, 43, 61, 0.1), 1px 4px 15px rgba(255, 0, 108, 0.16)',
        blueHigh: '0px 8px 24px rgba(38, 43, 61, 0.1), 1px 4px 24px rgba(76, 105, 215, 0.16)',
    },
};

const theme: DefaultTheme = { ...mainTheme, ...light };

export default theme;
