import React from 'react';

function Erase(props) {
    function handleClick(){
       props.setDataBase([])
    }
    return (
        <div className="footer">
            <button className="btn" onClick={handleClick}>
                ОЧИСТИТЬ
            </button>
        </div>
    );
}

export default Erase;