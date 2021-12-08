import React from "react";
import styled from "styled-components";
import { ConnectTemplate } from "../../components/templates";

const Connect = ({ setTokenHeader}) => {
    return (
        <Container>
            <ConnectTemplate setTokenHeader={ setTokenHeader } />
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
    background-color: #dbdbdb;
`;

export default Connect;