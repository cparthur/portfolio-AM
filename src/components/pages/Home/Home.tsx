import React from 'react';

import DefaultLayout from 'components/Layout/DefaultLayout';
import Body1 from 'library/typography/Body1';
import Heading5 from 'library/typography/Heading5';
import * as S from './Home.styled';

const Home: React.FC = () => (
    <DefaultLayout>
        <S.HomeContainer>
            <Heading5>Kick start your next front-end project quickly</Heading5>
            <ul>
                <li>
                    <Body1>Typescript, ESlint, Stylelint, Prettier, Styled-components.</Body1>
                </li>
                <li>
                    <Body1>Default layout, responsive breakpoints.</Body1>
                </li>
                <li>
                    <Body1>Theme and basic Typography components.</Body1>
                </li>
                <li>
                    <Body1>SEO compliant</Body1>
                </li>
                <li>
                    <Body1>Ready to be deployed with Netlify.</Body1>
                </li>
            </ul>
        </S.HomeContainer>
    </DefaultLayout>
);

export default Home;
