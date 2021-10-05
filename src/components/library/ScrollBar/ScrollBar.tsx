import React, { useMemo } from 'react';
import SimpleBar, { Props as SimpleBarProps } from 'simplebar-react';

import { useWindowDimension } from 'components/hooks/useWindowDimension';

type Props = {
    maxHeight?: string;
    children: React.ReactNode;
} & SimpleBarProps;

const ScrollBar = React.forwardRef<SimpleBar, Props>(({ children, maxHeight, ...props }, ref) => {
    const styles = {
        maxHeight,
    };

    const [width] = useWindowDimension();

    const isMobile = useMemo(() => {
        if (width !== null && width >= 1280) {
            return false;
        }
        return true;
    }, [width]);

    return (
        <>
            {isMobile ? (
                <>{children}</>
            ) : (
                <SimpleBar style={styles} ref={ref} {...props}>
                    {children}
                </SimpleBar>
            )}
        </>
    );
});
ScrollBar.displayName = 'ScrollBar';

export default ScrollBar;
