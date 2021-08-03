import React from 'react';

import DefaultHeader from './DefaultHeader';
import DefaultFooter from './DefaultFooter';
import { StyledDefaultLayout } from './StyledDefaultLayout';

const DefaultLayout: React.FC = ({ children }) => {
    return (
        <StyledDefaultLayout>
            <DefaultHeader />
            {children}
            <DefaultFooter />
        </StyledDefaultLayout>
    );
};

export default DefaultLayout;
