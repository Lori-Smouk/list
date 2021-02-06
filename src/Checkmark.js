import React from 'react';

function Checkmark(props) {

    function handleChangeInput(){
        props.setCheck(!props.check)
    }
    return (
        <input
            type="checkbox"
            checked={props.check}
            onChange={handleChangeInput}
        />
    );
}

export default Checkmark;