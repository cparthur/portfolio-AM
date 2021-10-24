import React from 'react';

import SwitchLang from 'components/settings/SwitchLang';
import SwitchTheme from 'components/settings/SwitchTheme';
import * as S from './DefaultFooterSettings.styled';

const DefaultFooterSettings = () => (
    <S.Settings>
        <SwitchLang />
        <SwitchTheme />
    </S.Settings>
);

export default DefaultFooterSettings;
