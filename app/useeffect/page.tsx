"use client";
import React, { useEffect, useState } from "react";

export default function UseEffect() {
    const [count, setCount] = useState(0);
    const [state, setState] = useState(0);

    useEffect(() => {
        // setstateを依存配列に入れてもなにも起こらない
        console.log("setCountを依存配列に入れた時の処理");
    }, [setCount]);

    useEffect(() => {
        console.log("マウント時とstateの値が変わる時のみ実行");
    }, [state]);

    useEffect(() => {
        console.log("マウント時とcountの値が変わるときのみ実行");
    }, [count]);

    useEffect(() => {
        // 依存配列がないとき
        console.log("全レンダリングで実行");
    });

    useEffect(() => {
        console.log("マウント時のみ実行");
        return () => {
            console.log("クリーンアップ");
        };
    }, []);

    // 毎回2度行われる（予期せぬ副作用が怒っても平気なように）
    console.log("レンダリング");
    return (
        <div>
            <h1>Reactでお試し用画面</h1>
            <div>
                <button onClick={() => setCount(count + 1)}>
                    カウントアップ
                </button>
                <h2>{count}</h2>
                <button onClick={() => setState(state + 1)}>
                    ステートアップ
                </button>
                <h2>{state}</h2>
            </div>
        </div>
    );
}
