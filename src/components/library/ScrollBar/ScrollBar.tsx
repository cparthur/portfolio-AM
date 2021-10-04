import React from 'react';
import SimpleBar, { Props as SimpleBarProps } from 'simplebar-react';

type Props = {
    maxHeight?: string;
    children: React.ReactNode;
} & SimpleBarProps;

const ScrollBar = React.forwardRef<SimpleBar, Props>(({ children, maxHeight, ...props }, ref) => {
    const styles = {
        maxHeight,
    };

    return (
        <SimpleBar style={styles} ref={ref} {...props}>
            {children}
        </SimpleBar>
    );
});
ScrollBar.displayName = 'ScrollBar';

export default ScrollBar;
