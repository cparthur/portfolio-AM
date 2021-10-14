import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Typography from 'library/typography/Typography';
import * as S from './SwitchLang.styled';

type LangTypes = string;

const SwitchLang = () => {
    const { i18n } = useTranslation();
    const { resolvedLanguage } = i18n;

    const [lang, setLang] = useState<LangTypes>(resolvedLanguage);

    const handleChangeLang = (language: LangTypes) => {
        setLang(language);
        i18n.changeLanguage(language);
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
