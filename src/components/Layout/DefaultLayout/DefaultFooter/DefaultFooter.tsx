import React from 'react';

import * as S from './DefaultFooter.styled';

const DefaultFooter = () => {
    const currentYear = new Date().getFullYear();

    return <S.DefaultFooterContainer>©{currentYear} Arthur Molinos</S.DefaultFooterContainer>;
};

export default DefaultFooter;
