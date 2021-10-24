import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';

import LogoDark from 'library/logo/LogoDark';
import LogoLight from 'library/logo/LogoLight';
import Typography from 'library/typography/Typography';
import { ThemeContext } from 'styles/Theme/ThemeStore';
import { ThemeName } from 'styles/Theme/types';
import * as S from './DefaultHeader.styled';

const DefaultHeader = () => {
    const { t } = useTranslation();

    const { theme } = useContext(ThemeContext);

    return (
        <S.DefaultHeaderContainer>
            <Link to="/" id="default-header-home-link">
                {theme === ThemeName.DARK && <LogoDark />}
                {theme === ThemeName.LIGHT && <LogoLight />}
            </Link>
            <S.DefaultHeaderMenu>
                <S.DefaultHeaderMenuItem to="/about/" activeClassName="header-menu-item-active">
                    <Typography weight="medium">{t('translation:header.about')}</Typography>
                </S.DefaultHeaderMenuItem>
            </S.DefaultHeaderMenu>
        </S.DefaultHeaderContainer>
    );
};

export default DefaultHeader;
