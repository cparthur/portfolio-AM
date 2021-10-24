import IconThemeDark from 'library/icons/IconThemeDark';
import React from 'react';

import * as S from './SwitchTheme.styled';

const SwitchTheme = () => (
    <S.SwitchTheme themeName="dark">
        <IconThemeDark />
    </S.SwitchTheme>
);

export default SwitchTheme;
