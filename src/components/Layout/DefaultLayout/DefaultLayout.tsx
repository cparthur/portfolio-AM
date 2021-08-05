import React from 'react';

import DefaultHeader from './DefaultHeader';
import DefaultFooter from './DefaultFooter';
import * as S from './DefaultLayout.styled';

const DefaultLayout: React.FC = ({ children }) => (
    <S.DefaultLayoutContainer>
        <DefaultHeader />
        {children}
        <DefaultFooter />
    </S.DefaultLayoutContainer>
);

export default DefaultLayout;
