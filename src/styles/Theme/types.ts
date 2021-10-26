import 'styled-components';

import { ThemeName } from './ThemeStore';

declare module 'styled-components' {
    export interface DefaultTheme {
        name?: ThemeName;
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
        transition: {
            theme: string;
        };
    }
}
