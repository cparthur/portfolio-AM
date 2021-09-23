import React from 'react';

import DefaultLayout from 'components/layout/DefaultLayout';
import Typography from 'library/typography/Typography';
import DefaultProjectList from 'components/projects/projectList/DefaultProjectList';
import * as S from './Home.styled';

const Home: React.FC = () => (
    <DefaultLayout>
        <S.HomeContainer>
            <Typography as="h2" weight="extrabold">
                Project
            </Typography>
            <Typography customWeight={150}>Some projects I have done with passionate people.</Typography>
            <DefaultProjectList />
        </S.HomeContainer>
    </DefaultLayout>
);

export default Home;
