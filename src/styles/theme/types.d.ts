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
        };
    }
}
