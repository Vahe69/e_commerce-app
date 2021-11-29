import React from "react";

const Input = (props) => {
    return(
        <>
            <input value={props.value} id={props.id} type={props.type} required={props.required} name={props.name} style={props.style} onChange={props.onChange}/>
        </>
    );
}

export default Input;