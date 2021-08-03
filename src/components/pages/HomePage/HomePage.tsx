import React from 'react';

import Body1 from 'components/library/typography/Body1';
import Heading5 from 'library/typography/Heading5';
import { StyledHomePage } from './StyledHomePage';

const HomePage: React.FC = () => {
    return (
        <StyledHomePage>
            <Heading5>GATSBY STARTER</Heading5>
            <Body1>Typescript, ESlint, Prettier, Styled-components and some basic components</Body1>
        </StyledHomePage>
    );
};

export default HomePage;
