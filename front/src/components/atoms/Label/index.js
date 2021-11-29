import React from 'react';

const Label = (props) => {

    return (
        <label id={props.id} className={props.className} style={props.style}>
            {props.attribut}
        </label>
    );
}

export default Label;