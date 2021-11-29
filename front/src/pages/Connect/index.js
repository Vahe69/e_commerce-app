import React from "react";
import styled from "styled-components";
import { ConnectTemplate } from "../../components/templates";

const Connect = ({ setTokenHeader, user }) => {
    return (
        <Container>
            <ConnectTemplate setTokenHeader={ setTokenHeader } user={ user } />
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
    background-color: #dbdbdb;
`;

export default Connect;