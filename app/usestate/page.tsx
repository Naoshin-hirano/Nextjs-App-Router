"use client";
import React, { useRef, useState } from "react";

export default function UseEffect() {
    const [count, setCount] = useState(0);
    const [state, setState] = useState(0);
    const [flag, setFlag] = useState(false);
    const refTest = useRef(0);
    let test = 0;

    // setStateを更新した関数が完了後に、stateの値が更新され、再レンダリングされる
    const countUp = () => {
        setCount(count + 1);
        refTest.current += 1;
        test += 1;
        console.log("State", count);
        console.log("Ref", refTest.current);
        console.log("Let", test);
    };

    // 毎回2度行われる（予期せぬ副作用が怒っても平気なように）
    console.log("レンダリング");
    return (
        <div>
            <h1>ReactでuseStateお試し用画面</h1>
            <div>
                <button onClick={() => countUp()}>カウントアップ</button>
                <button onClick={() => setState(state + 1)}>
                    ステートアップ
                </button>
                <h2>{count}</h2>
                <h2>{state}</h2>
                <button onClick={() => setFlag((prevState) => !prevState)}>
                    フラグ
                </button>
                <h3>{flag ? "TRUE" : "FALSE"}</h3>
            </div>
        </div>
    );
}
