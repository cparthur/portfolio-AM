import React from 'react';

import ScrollBar from 'library/ScrollBar/ScrollBar';
import BackgroundVector from 'library/background/BackgroundVector';
import DefaultHeader from './DefaultHeader';
import DefaultFooter from './DefaultFooter';
import * as S from './DefaultLayout.styled';

const DefaultLayout: React.FC = ({ children }) => (
    <S.DefaultLayoutContainer>
        <BackgroundVector />
        <ScrollBar maxHeight="100vh">
            <S.DefaultLayoutInnerContainer>
                <DefaultHeader />
                {children}
                <DefaultFooter />
            </S.DefaultLayoutInnerContainer>
        </ScrollBar>
    </S.DefaultLayoutContainer>
);

export default DefaultLayout;
