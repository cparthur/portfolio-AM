import React from 'react';

import ScrollBar from 'library/ScrollBar/ScrollBar';
import BackgroundVector from 'library/background/BackgroundVector';
import DefaultHeader from './DefaultHeader';
import DefaultFooter from './DefaultFooter';
import * as S from './DefaultLayout.styled';

const DefaultLayout: React.FC = ({ children }) => (
    <ScrollBar maxHeight="100vh">
        <S.DefaultLayoutContainer>
            <BackgroundVector />
            <DefaultHeader />
            {children}
            <DefaultFooter />
        </S.DefaultLayoutContainer>
    </ScrollBar>
);

export default DefaultLayout;
