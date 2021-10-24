import { DefaultTheme } from 'styled-components';
import { ThemeName } from './types';

const themeData: DefaultTheme = {
    name: ThemeName.DARK,
    color: {
        primary: {
            start: 'var(--theme-colors-primary-start)',
            end: 'var(--theme-colors-primary-end)',
            gradient: 'var(--theme-colors-primary-gradient)',
        },
        body: 'var(--theme-colors-body)',
        onBody: {
            highEmphasis: 'var(--theme-colors-onBody-highEmphasis)',
            mediumEmphasis: 'var(--theme-colors-onBody-mediumEmphasis)',
            lowEmphasis: 'var(--theme-colors-onBody-lowEmphasis)',
            placeholder: 'var(--theme-colors-onBody-placeholder)',
        },
    },
    shadow: {
        default: 'var(--theme-shadow-default)',
        large: 'var(--theme-shadow-large)',
    },
    typography: {
        fonts: '"Inter variable", -apple-system, "Helvetica Neue", "Arial", sans-serif',
    },
    transition: {
        theme: '300ms',
    },
};

export default themeData;
