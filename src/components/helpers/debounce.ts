const debounce = (fn: () => void, ms: number) => {
    let timer: ReturnType<typeof setTimeout>;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn();
        }, ms);
    };
};

export default debounce;
