import React from 'react';
import { Link } from 'gatsby';

import DefaultLayout from 'components/layout/DefaultLayout';
import Typography from 'library/typography/Typography';
import * as S from './Page404.styled';

const Page404 = () => (
    <DefaultLayout>
        <S.Page404Container>
            <Typography weight="extrabold">Page not found</Typography>
            <Typography>
                Sorry{' '}
                <span role="img" aria-label="Pensive emoji">
                    😔{' '}
                </span>
                we couldn’t find what you were looking for.
                <br />
                <Link to="/">Go home</Link>.
            </Typography>
        </S.Page404Container>
    </DefaultLayout>
);

export default Page404;
