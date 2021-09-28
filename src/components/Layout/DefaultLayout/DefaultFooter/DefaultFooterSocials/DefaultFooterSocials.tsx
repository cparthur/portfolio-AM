import React from 'react';

import Typography from 'library/typography/Typography';
import IconLinkedIn from 'library/icons/IconLinkedIn';
import IconGithub from 'library/icons/IconGithub';
import IconProductHunt from 'library/icons/IconProductHunt';
import * as S from './DefaultFooterSocials.styled';

const DefaultFooterSocials = () => (
    <S.Socials>
        <S.Social href="https://www.linkedin.com/in/arthur-molinos" target="_blank" rel="noreferrer noopener">
            <IconLinkedIn />
            <Typography weight="light">arthur-molinos</Typography>
        </S.Social>
        <S.Social href="https://github.com/cparthur" target="_blank" rel="noreferrer noopener">
            <IconGithub />
            <Typography weight="light">cparthur</Typography>
        </S.Social>
        <S.Social href="https://www.producthunt.com/@a_molinos" target="_blank" rel="noreferrer noopener">
            <IconProductHunt />
            <Typography weight="light">@a_molinos</Typography>
        </S.Social>
    </S.Socials>
);

export default DefaultFooterSocials;
