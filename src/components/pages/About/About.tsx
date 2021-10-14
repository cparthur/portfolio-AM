import React from 'react';
import { useTranslation } from 'react-i18next';

import DefaultLayout from 'components/Layout/DefaultLayout';
import Typography from 'library/typography/Typography';
import * as S from './About.styled';

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <DefaultLayout>
            <S.AboutContainer>
                <S.AboutText>
                    {t('translation:about.whatIdo.part1')}
                    <br />
                    <br />
                    {t('translation:about.whatIdo.part2')}
                </S.AboutText>
                <S.AboutSubtitle weight="extrabold">{t('translation:about.myJourney.title')}</S.AboutSubtitle>
                <S.AboutText>
                    {t('translation:about.myJourney.why')}
                    <br />
                    {t('translation:about.myJourney.ecv.part1')}{' '}
                    <a href="https://www.ecv.fr/en/" target="_blank" rel="noreferrer noopener">
                        <Typography as="span" weight="medium" isLink highlighted>
                            ECV
                        </Typography>
                    </a>
                    {t('translation:about.myJourney.ecv.part2')} {t('translation:about.myJourney.OClock.part1')}{' '}
                    <a href="https://oclock.io/" target="_blank" rel="noreferrer noopener">
                        <Typography as="span" weight="medium" isLink highlighted>
                            O’Clock
                        </Typography>
                    </a>
                    {t('translation:about.myJourney.OClock.part2')} {t('translation:about.myJourney.krak.part1')}{' '}
                    <a href="https://skatekrak.com/" target="_blank" rel="noreferrer noopener">
                        <Typography as="span" weight="medium" isLink highlighted>
                            Krak
                        </Typography>
                    </a>
                    {t('translation:about.myJourney.krak.part2')}{' '}
                    <a href="https://www.techstars.com/accelerators/boulder" target="_blank" rel="noreferrer noopener">
                        <Typography as="span" weight="medium" isLink highlighted>
                            Techstars Boulder Program
                        </Typography>
                    </a>
                    {t('translation:about.myJourney.krak.part3')}{' '}
                    <a href="https://thepunkclub.com/" target="_blank" rel="noreferrer noopener">
                        <Typography as="span" weight="medium" isLink highlighted>
                            The Punk Club
                        </Typography>
                    </a>
                    {t('translation:about.myJourney.krak.part4')} {t('translation:about.myJourney.verbz')}{' '}
                    <a href="https://www.verbz.ai/" target="_blank" rel="noreferrer noopener">
                        <Typography as="span" weight="medium" isLink highlighted>
                            Verbz
                        </Typography>
                    </a>
                    .
                    <br />
                    <br />
                    {t('translation:about.myJourney.conclusion')}
                </S.AboutText>
            </S.AboutContainer>
        </DefaultLayout>
    );
};

export default About;
