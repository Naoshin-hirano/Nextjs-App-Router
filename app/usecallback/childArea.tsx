import React, { memo } from "react";

const style = {
    width: "100%",
    height: "200px",
    backgroundColor: "khaki",
};

// memoをつけることでpropsが変化しなければ再レンダリングしない
export default memo(function ChildArea(props: {
    open: boolean;
    onClickClose: () => void;
}) {
    const { open, onClickClose } = props;
    console.log("ChildAreaがレンダリング");

    // const data = [...Array(2000).keys()];
    return (
        <>
            {open ? (
                <div style={style}>
                    <p>子コンポーネント</p>
                    <button onClick={onClickClose}>閉じる</button>
                </div>
            ) : null}
        </>
    );
});
