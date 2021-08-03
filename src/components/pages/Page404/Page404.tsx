import React from 'react';
import { Link } from 'gatsby';

import Heading5 from 'library/typography/Heading5';
import Body1 from 'library/typography/Body1';
import { StyledPage404 } from './StyledPage404';

const Page404 = () => {
    return (
        <StyledPage404>
            <Heading5>Page not found</Heading5>
            <Body1>
                Sorry{' '}
                <span role="img" aria-label="Pensive emoji">
                    😔
                </span>{' '}
                we couldn’t find what you were looking for.
                <br />
                <Link to="/">Go home</Link>.
            </Body1>
        </StyledPage404>
    );
};

export default Page404;
