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
            <S.Language isActive={lang === 'en'} onClick={() => handleChangeLang('en')}>
                <Typography weight={lang === 'en' ? 'extrabold' : 'medium'}>EN</Typography>
            </S.Language>
            <S.Separator />
            <S.Language isActive={lang === 'fr'} onClick={() => handleChangeLang('fr')}>
                <Typography weight={lang === 'fr' ? 'extrabold' : 'medium'}>FR</Typography>
            </S.Language>
        </S.SwitchLang>
    );
};

export default SwitchLang;
