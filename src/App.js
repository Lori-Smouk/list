import React, {useState} from 'react';
import Header from "./Header";
import Form from "./Form";
import Main from "./Main";
import Style from "./Style.css"


function App(props) {
    const [dataBase, setDataBase] = useState([
        {
            name: "Дочитать 'Книжный вор'",
            favorite: false,
            done: false,
            star: "★",
            delete: "❌"
        },
        {
            name: "Помыть посуду",
            favorite: false,
            done: false,
            star: "★",
            delete: "❌"
        },
        {
            name: "Сделать домашку по программированию",
            favorite: false,
            done: false,
            star: "★",
            delete: "❌"
        },
    ]);
    const [text, setText] = useState('')
    return (
        <div>
            <Header/>
            <Form
                dataBase={dataBase}
                setDataBase={setDataBase}
                text={text}
                setText={setText}
            />
            <Main
                dataBase={dataBase}
                setDataBase={setDataBase}
            />
        </div>
    );
}

export default App;