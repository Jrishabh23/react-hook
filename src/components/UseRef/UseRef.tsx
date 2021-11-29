import { useEffect, useRef } from "react";

export const UseRef = () => {
    const inputElement = useRef<any | null>(null);

    useEffect(() => {
        inputElement.current.focus();
    }, []);

    const _handleEvent = () => {
        console.log(inputElement.current.value);
    };

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={_handleEvent}>Focus Input</button>
        </>
    );
};
