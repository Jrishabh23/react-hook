import { useEffect, useState } from "react";
import { render } from "react-dom";

export const UseEffect = () => {
    const [input, setInput] = useState<string>("");
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log("I am run every  render");
    });

    useEffect(() => {
        console.log("I am run only one time");
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
            console.log(count);
        }, 1000);

        return () => {
            console.log("Clean useEffect");
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        console.log("I am run when input update");
    }, [input]);

    return (
        <>
            <h1>UseEffect</h1>
            <p>Counter update every 1 second: {count}</p>
            Text
            <input type="text" onChange={(e) => setInput(e.target.value)} />
        </>
    );
};
