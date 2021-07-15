import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
            primary: {
                80: string;
                50: string;
                20: string;
            };
            secondary: {
                80: string;
                50: string;
                20: string;
            };
            tertiary: {
                black: string;
                white: string;
                light: string;
                dark: string;
                background: string;
            };
            onLight: {
                highEmphasis: string;
                mediumEmphasis: string;
                lowEmphasis: string;
                placeholder: string;
                divider: string;
            };
            onDark: {
                highEmphasis: string;
                mediumEmphasis: string;
                lowEmphasis: string;
                whiteOverlay: string;
                divider: string;
            };
            miscellaneous: {
                error: string;
                confirm: string;
                selected: {
                    primary: string;
                    secondary: string;
                };
            };
            additional: {
                red: string;
                purple: string;
                indigo: string;
                blue: string;
                teal: string;
                green: string;
                yellow: string;
                orange: string;
            };
        };
        typography: {
            fonts: string;
            h2: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            h3: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            h4: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            h5: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
            };
            h6: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                letterSpacing: string;
                lineHeight: string;
            };
            subtitle1: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                letterSpacing: string;
                lineHeight: string;
            };
            subtitle2: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                letterSpacing: string;
                lineHeight: string;
            };
            body1: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                letterSpacing: string;
                lineHeight: string;
            };
            body2: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                letterSpacing: string;
                lineHeight: string;
            };
            button: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                letterSpacing: string;
                lineHeight: string;
                textTransform: string;
            };
            caption: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                letterSpacing: string;
                lineHeight: string;
            };
            overline: {
                fontFamily: string;
                fontSize: string;
                fontWeight: string;
                letterSpacing: string;
                lineHeight: string;
            };
        };
        shadow: {
            low: string;
            medium: string;
            high: string;
            extremelyHigh: string;
            pinkHigh: string;
            blueHigh: string;
        };
    }
}
