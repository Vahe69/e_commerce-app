import React from 'react';

const Li = (props) => {

    return (
        <li id={props.id} className={props.className} style={props.style} onClick={props.onClick}>
            {props.attribut}
        </li>
    );
}

export default Li;