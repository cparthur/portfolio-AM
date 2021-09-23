import React from 'react';

import Typography from 'library/typography/Typography';

import * as S from './DefaultHeader.styled';

const DefaultHeader = () => (
    <S.DefaultHeaderContainer>
        <Typography weight="extrabold">Arthur Molinos</Typography>
    </S.DefaultHeaderContainer>
);

export default DefaultHeader;
