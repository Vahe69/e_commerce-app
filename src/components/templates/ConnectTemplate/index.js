import React from "react";
import styled from "styled-components";
import { ConnectOrga } from "../../organisms";

const ConnectTemplate = ({ setTokenHeader, user }) => {
    return (
        <Container>
            <ConnectOrga setTokenHeader={ setTokenHeader } user={ user } />
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
`;

export default ConnectTemplate;