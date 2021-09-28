import React from 'react';

import LogoDark from 'library/logo/LogoDark';
import * as S from './DefaultHeader.styled';

const DefaultHeader = () => (
    <S.DefaultHeaderContainer>
        <LogoDark />
        <S.DefaultHeaderMenu>
            <S.DefaultHeaderMenuItem weight="medium">About</S.DefaultHeaderMenuItem>
        </S.DefaultHeaderMenu>
    </S.DefaultHeaderContainer>
);

export default DefaultHeader;
