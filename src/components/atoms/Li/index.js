import React from 'react';

const Li = (props) => {

    return (
        <li key={props.key} id={props.id} className={props.className} style={props.style} onClick={props.onClick}>
            {props.attribut}
        </li>
    );
}

export default Li;