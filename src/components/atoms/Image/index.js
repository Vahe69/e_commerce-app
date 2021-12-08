import React from 'react';

const Image = (props) => {

    return (
        <img key={props.key} src={props.src} className={props.className} style={props.style} alt={props.alt} />
    );
}

export default Image;