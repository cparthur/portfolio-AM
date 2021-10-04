import React from 'react';
import { Link } from 'gatsby';

import LogoDark from 'library/logo/LogoDark';
import Typography from 'library/typography/Typography';
import * as S from './DefaultHeader.styled';

const DefaultHeader = () => (
    <S.DefaultHeaderContainer>
        <Link to="/" id="default-header-home-link">
            <LogoDark />
        </Link>
        <S.DefaultHeaderMenu>
            <S.DefaultHeaderMenuItem to="/about" activeClassName="header-menu-item-active">
                <Typography weight="medium">About</Typography>
            </S.DefaultHeaderMenuItem>
        </S.DefaultHeaderMenu>
    </S.DefaultHeaderContainer>
);

export default DefaultHeader;
