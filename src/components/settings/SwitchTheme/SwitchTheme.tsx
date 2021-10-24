import React, { useContext } from 'react';

import IconThemeDark from 'library/icons/IconThemeDark';
import IconThemeLight from 'library/icons/IconThemeLight';
import { ThemeName } from 'styles/Theme/types';
import { ThemeContext } from 'styles/Theme/ThemeStore';
import * as S from './SwitchTheme.styled';

const SwitchTheme = () => {
    const { theme, switchTheme } = useContext(ThemeContext);

    const handleSwitchTheme = () => {
        if (theme.name === ThemeName.DARK) {
            switchTheme(ThemeName.LIGHT);
        } else {
            switchTheme(ThemeName.DARK);
        }
    };

    return (
        <S.SwitchTheme onClick={handleSwitchTheme} themeName={theme.name}>
            {theme.name === ThemeName.DARK ? <IconThemeDark /> : <IconThemeLight />}
        </S.SwitchTheme>
    );
};

export default SwitchTheme;
