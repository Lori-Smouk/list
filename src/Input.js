import React from 'react';
import Checkmark from "./Checkmark";
import Button from "./Button";

function Input(props) {
    function handleChange(e){
         props.setText(e.target.value)
    }

    return (
        <div>
            <input className="input"
                   placeholder="Введите текст..."
                   type="text"
                   value={props.text}
                   onChange={handleChange}
            />
            <Checkmark
                check={props.check}
                setCheck={props.setCheck}
            />
        </div>
    );
}

export default Input;