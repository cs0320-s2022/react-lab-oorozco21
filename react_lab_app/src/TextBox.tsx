import React from "react";

function TextBox(props: any) {
    return (
        <div>
            <label>Enter {props.label}:
                <input type="text" onChange={e => props.change(e.target.value)}/>
            </label>
        </div>
    );
}

export default TextBox;
