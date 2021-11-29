import { useEffect, useMemo, useState } from "react";
import { render } from "react-dom";

export const UseMemo = () => {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    // Change the state to the input
    const onChangeHandler = (e: any) => {
        setNumber(e.target.value);
    };

    useMemo(() => {
        // _squareNum;
    }, [number]);

    const _squareNum = (num: number) => num ** num;

    // Increases the counter by 1
    const counterHandler = () => {
        setCounter(counter + 1);
    };
    return (
        <div className="App">
            <h1>UseMemo</h1>
            <input
                type="number"
                placeholder="Enter a number"
                value={number}
                onChange={onChangeHandler}
            />

            <div>OUTPUT: {_squareNum}</div>
            <button onClick={counterHandler}>Counter ++</button>
            <div>Counter : {counter}</div>
        </div>
    );
};
