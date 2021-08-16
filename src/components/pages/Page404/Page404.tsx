import React from 'react';
import { Link } from 'gatsby';

import DefaultLayout from 'components/Layout/DefaultLayout';
import Heading5 from 'library/typography/Heading5';
import Body1 from 'library/typography/Body1';
import * as S from './Page404.styled';

const Page404 = () => (
    <DefaultLayout>
        <S.Page404Container>
            <Heading5>Page not found</Heading5>
            <Body1>
                Sorry{' '}
                <span role="img" aria-label="Pensive emoji">
                    😔{' '}
                </span>
                we couldn’t find what you were looking for.
                <br />
                <Link to="/">Go home</Link>.
            </Body1>
        </S.Page404Container>
    </DefaultLayout>
);

export default Page404;
