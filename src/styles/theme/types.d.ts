import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        theme: string;
        color: {
            primary: {
                start: string;
                end?: string;
            };
            body: string;
            onBody: {
                highEmphasis: string;
                mediumEmphasis: string;
                lowEmphasis: string;
                placeholder: string;
            };
        };
        shadow: {
            default: string;
            large: string;
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
    }
}
