import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';

import LogoDark from 'library/logo/LogoDark';
import Typography from 'library/typography/Typography';
import * as S from './DefaultHeader.styled';

const DefaultHeader = () => {
    const { t } = useTranslation();

    return (
        <S.DefaultHeaderContainer>
            <Link to="/" id="default-header-home-link">
                <LogoDark />
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
