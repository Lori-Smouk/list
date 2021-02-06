import React, {useState} from 'react';
import Input from "./Input";
import Button from "./Button";

function Form(props) {
    const [check, setCheck] = useState(false)
    return (
        <div className="form">
            <Input
                text={props.text}
                setText={props.setText}
                check={check}
                setCheck={setCheck}
            />
            <Button
                dataBase={props.dataBase}
                setDataBase={props.setDataBase}
                text={props.text}
                setText={props.setText}
                check={check}
                setCheck={setCheck}
            />
        </div>
    );
}

export default Form;