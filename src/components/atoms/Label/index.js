import React from 'react';

const Label = (props) => {

    return (
        <label key={props.key} id={props.id} className={props.className} style={props.style} onClick={props.onClick}>
            {props.attribut}
        </label>
    );
}

export default Label;