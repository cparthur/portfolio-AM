import React from 'react';

import Typography from 'library/typography/Typography';
import * as S from './SwitchLang.styled';

const SwitchLang = () => (
    <S.SwitchLang>
        <S.Language>
            <Typography weight="extrabold">EN</Typography>
        </S.Language>
        <S.Separator />
        <S.Language>
            <Typography weight="medium">FR</Typography>
        </S.Language>
    </S.SwitchLang>
);

export default SwitchLang;
