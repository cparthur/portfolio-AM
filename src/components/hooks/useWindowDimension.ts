import { useState, useEffect } from 'react';

import debounce from 'components/helpers/debounce';

export const useWindowDimension = () => {
    const [dimension, setDimension] = useState<[number | null, number | null]>([null, null]);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        setDimension([window.innerWidth, window.innerHeight]);

        if (window.innerWidth >= 1280) {
            setIsMobile(false);
        }

        const debouncedResizeHandler = debounce(() => {
            setDimension([window.innerWidth, window.innerHeight]);

            if (window.innerWidth >= 1280) {
                setIsMobile(false);
            } else {
                setIsMobile(true);
            }
        }, 100); // 100ms

        window.addEventListener('resize', debouncedResizeHandler);

        return () => window.removeEventListener('resize', debouncedResizeHandler);
    }, []); // Note this empty array. this effect should run only on mount and unmount

    return { dimension, isMobile };
};
