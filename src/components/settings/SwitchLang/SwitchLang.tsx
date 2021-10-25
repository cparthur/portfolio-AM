import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Typography from 'library/typography/Typography';
import * as S from './SwitchLang.styled';

const SwitchLang = () => {
    const { i18n } = useTranslation();
    const { language } = i18n;

    const [lang, setLang] = useState(language);

    const handleChangeLang = (newLang: string) => {
        setLang(newLang);
        i18n.changeLanguage(newLang);
    };

    return (
        <S.SwitchLang>
            <S.Language onClick={() => handleChangeLang('en')}>
                <Typography highlighted={lang === 'en'} weight={lang === 'en' ? 'extrabold' : 'medium'}>
                    EN
                </Typography>
            </S.Language>
            <S.Separator />
            <S.Language onClick={() => handleChangeLang('fr')}>
                <Typography highlighted={lang === 'fr'} weight={lang === 'fr' ? 'extrabold' : 'medium'}>
                    FR
                </Typography>
            </S.Language>
        </S.SwitchLang>
    );
};

export default SwitchLang;
