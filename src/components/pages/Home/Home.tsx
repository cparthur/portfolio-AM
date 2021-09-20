import React from 'react';

import DefaultLayout from 'components/layout/DefaultLayout';
import Body1 from 'library/typography/Body1';
import Heading5 from 'library/typography/Heading5';
import DefaultProjectList from 'components/projects/projectList/DefaultProjectList';
import * as S from './Home.styled';

const Home: React.FC = () => (
    <DefaultLayout>
        <S.HomeContainer>
            <Heading5>Projects</Heading5>
            <Body1>Some projects I have done with passionate people.</Body1>
            <DefaultProjectList />
        </S.HomeContainer>
    </DefaultLayout>
);

export default Home;
