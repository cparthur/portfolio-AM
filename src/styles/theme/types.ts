import 'styled-components';

export enum ThemeName {
    DARK = 'dark',
    LIGHT = 'light',
}

declare module 'styled-components' {
    export interface DefaultTheme {
        name: ThemeName;
        color: {
            primary: {
                start: string;
                end?: string;
                gradient?: string;
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
