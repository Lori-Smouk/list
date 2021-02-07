import React from 'react';
import Erase from "./Erase";

function Main(props) {
    function handleStar(index){
        const star = props.dataBase.map((item, id) => {
               if(index === id){
                   return {
                       ...item,
                       favorite: !item.favorite
                   };
               }
                return item;
            });
        props.setDataBase(star)
    }
    function handleDeleteBut(index){
        const filtered = props.dataBase.filter((item, id) => {
            return id !== index;
        });
        props.setDataBase(filtered)
    }
    function handleChange(index){
        props.setDataBase(props.dataBase.map((item, id)=> {
                if (id === index){
                    return ({
                        ...item,
                        done: !item.done
                    })
                }
                return item;
            })
        )
    }
    return (
        <div>
            {props.dataBase.map((item, id)=> {
                return (
                    <div key={id} className={`main ${item.favorite ? "favorite" : ""}`}>
                        <button className="star" onClick={() => handleStar(id)}>{item.star}</button>
                        <div className="name">{item.name}</div>
                        <input type="checkbox" checked={item.done} onChange={() => handleChange(id)}/>
                        <button className="main-button" onClick={() => handleDeleteBut(id)}>{item.delete}️</button>
                    </div>
                )
            })}
            <Erase
                setDataBase={props.setDataBase}
            />
        </div>
    );
}

export default Main;