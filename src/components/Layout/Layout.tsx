/*
 * This Layout exist ton manage different layouts.
 * It receives PageProps from gatsby wrapPageElement which provides router props.
 */
import React from 'react';
import { PageProps } from 'gatsby';

import DefaultLayout from './DefaultLayout';

type LayoutProps = {
    pageProps: PageProps;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <DefaultLayout>{children}</DefaultLayout>
        </>
    );
};

export default Layout;
