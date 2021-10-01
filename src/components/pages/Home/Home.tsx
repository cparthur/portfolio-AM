import React from 'react';

import DefaultLayout from 'components/Layout/DefaultLayout';
import Typography from 'library/typography/Typography';
import Emoji from 'library/icons/Emoji';
import * as S from './Home.styled';

const Home: React.FC = () => (
    <DefaultLayout>
        <S.HomeContainer>
            <S.HeyText>
                <Typography>Hey internets!</Typography>
                <Emoji symbol="✌️" label="hey hand" />
            </S.HeyText>
            <S.Title forwardedAs="h1">
                I’m{' '}
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
                Currently available for freelance projects and designer at{' '}
                <a href="https://skatekrak.com/" target="_blank" rel="noreferrer noopener">
                    <Typography as="span" isLink highlighted>
                        skatekrak
                    </Typography>
                </a>
            </S.PositionText>
        </S.HomeContainer>
    </DefaultLayout>
);

export default Home;
