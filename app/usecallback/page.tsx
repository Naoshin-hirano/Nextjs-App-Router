"use client";
import React, { useCallback, useState } from "react";
import ChildArea from "./childArea";

export default function UseCallback() {
    const [text, setText] = useState("");
    const [open, setOpen] = useState(false);
    console.log("親コンポーネントのレンダリング");

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) =>
        setText(e.target.value);

    const onClickOpen = () => setOpen(!open);
    /**
     * 関数があると子コンポーネントをmemo化しても、関数のpropsを異なる値としか見ないためレンダリングする、ことを防ぐ
     * → 使う場面は、関数をpropsとして流すとき
     */
    const onClickClose = useCallback(() => setOpen(false), []);
    return (
        <div>
            <input type="text" value={text} onChange={(e) => onChangeText(e)} />
            <br />
            <br />
            <button onClick={onClickOpen}>表示</button>
            <ChildArea open={open} onClickClose={onClickClose} />
        </div>
    );
}
