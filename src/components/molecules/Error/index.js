import React from "react";
import { Label } from "../../atoms";
import styled from "styled-components";

const Error = () => {
    const style = {
        "fontSize": "45px",
        "color": "black"
    }

    return(
        <Container>
            <Label attribut="Erreur 404 not found" style={style}/>
        </Container>
    );
}

const Container = styled.div``;

export default Error;