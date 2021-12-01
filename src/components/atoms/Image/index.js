import React from 'react';

const Image = (props) => {

    return (
        <img src={props.src} className={props.className} style={props.style} alt={props.alt} />
    );
}

export default Image;