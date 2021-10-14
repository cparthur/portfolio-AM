import React from 'react';
import { useTranslation } from 'react-i18next';

import DefaultLayout from 'components/Layout/DefaultLayout';
import Typography from 'library/typography/Typography';
import Emoji from 'library/icons/Emoji';
import * as S from './Home.styled';

const Home: React.FC = () => {
    const { t } = useTranslation();

    return (
        <DefaultLayout>
            <S.HomeContainer>
                <S.HeyText>
                    <Typography>Hey internets!</Typography>
                    <Emoji symbol="✌️" label="hey hand" />
                </S.HeyText>
                <S.Title forwardedAs="h1">
                    {t('translation:home.whoIam')}{' '}
                    <Typography as="span" highlighted weight="extrabold">
                        Arthur Molinos
                    </Typography>
                    ,
                    <br />
                    <Typography as="span" highlighted>
                        Product Designer{' '}
                    </Typography>
                    &{' '}
                    <Typography as="span" highlighted>
                        Web developer
                    </Typography>
                </S.Title>
                <S.Separator />
                <S.PositionText>
                    {t('translation:home.whatIdo.job')} <br />
                    {t('translation:home.whatIdo.side')}{' '}
                    <a href="https://skatekrak.com/" target="_blank" rel="noreferrer noopener">
                        <Typography as="span" isLink highlighted>
                            skatekrak
                        </Typography>
                    </a>
                    .
                </S.PositionText>
            </S.HomeContainer>
        </DefaultLayout>
    );
};

export default Home;
