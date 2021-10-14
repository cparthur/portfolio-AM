import React from 'react';

import DefaultFooterSocials from './DefaultFooterSocials';
import DefaultFooterSettings from './DefaultFooterSettings';
import * as S from './DefaultFooter.styled';

const DefaultFooter = () => (
    <S.DefaultFooterContainer>
        <DefaultFooterSocials />
        <DefaultFooterSettings />
    </S.DefaultFooterContainer>
);

export default DefaultFooter;
