import React from "react";
import styled from "styled-components";
import { ConnectOrga, Header } from "../../organisms";

const ConnectTemplate = ({ setTokenHeader, tokenHeader }) => {
    return (
        <Container>
            <Header tokenHeader={ tokenHeader } />
            <ConnectOrga setTokenHeader={ setTokenHeader } />
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
`;

export default ConnectTemplate;