import React from "react";
/**
 * Messageコンポーネント
 * @returns 
 */
function Message(props){    /** コンポーネントを呼び出すときにpropsというobjectに与えられた属性やタグ内の値を渡す。 */
    return (
        <p>Hello, {props.name}</p>
    )
}

export default Message;