import React from "react";
import styled from "styled-components";
import { Error } from "../../molecules";

const ErrorOrga = () => {

    return(
        <Container>
            <Error />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    background-color: gray;
    border-radius: 25px;
    flex-direction: column;
    margin: auto;
    justify-content: space-evenly;
    width: 55%;
    align-items: center;
    padding: 2%;
`;

export default ErrorOrga;