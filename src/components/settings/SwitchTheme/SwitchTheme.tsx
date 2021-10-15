import React, { useState } from 'react';

import IconThemeDark from 'library/icons/IconThemeDark';
import IconThemeLight from 'library/icons/IconThemeLight';
import { ThemeName } from 'styles/theme';
import * as S from './SwitchTheme.styled';

const SwitchTheme = () => {
    const [theme, setTheme] = useState<ThemeName>('dark');

    const handleSwitchTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    };

    return (
        <S.SwitchTheme onClick={handleSwitchTheme} themeName={theme}>
            {theme === 'dark' ? <IconThemeDark /> : <IconThemeLight />}
        </S.SwitchTheme>
    );
};

export default SwitchTheme;
