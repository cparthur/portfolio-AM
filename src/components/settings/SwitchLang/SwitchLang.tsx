import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Typography from 'library/typography/Typography';
import * as S from './SwitchLang.styled';

const SwitchLang: React.FC = () => {
    const { i18n } = useTranslation();
    const { language } = i18n;

    const [lang, setLang] = useState<string | undefined>(undefined);

    useEffect(() => {
        const value = language.split('-')[0];
        if (value === 'en' || value === 'fr') {
            setLang(value);
        } else {
            setLang('en');
        }
    }, [language]);

    const handleChangeLang = (newLang: string) => {
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
