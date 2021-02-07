import React from 'react';

function Button(props) {
    function handleAddDataBase(){
        if (props.text.length > 0){
            props.setDataBase(
                [{
                    name: props.text,
                    favorite: false,
                    star: "★",
                    delete: "❌",
                    done: props.check
                }, ...props.dataBase])
        }
        props.setText("")
        props.setCheck("")
    }

    return (
        <div>
            <button className="btn" onClick={handleAddDataBase}>
                Добавить
            </button>
        </div>
    );
}

export default Button;