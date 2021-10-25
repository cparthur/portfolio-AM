import React, { useContext } from 'react';

import ScrollBar from 'library/ScrollBar/ScrollBar';
import BackgroundVector from 'library/background/BackgroundVector';
import { ThemeContext } from 'styles/Theme/ThemeStore';
import SvgLightGradient from 'styles/Theme/SvgLightGradient';
import DefaultHeader from './DefaultHeader';
import DefaultFooter from './DefaultFooter';
import * as S from './DefaultLayout.styled';

const DefaultLayout: React.FC = ({ children }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <S.DefaultLayoutContainer>
            {theme === 'light' && <SvgLightGradient />}
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
};

export default DefaultLayout;
