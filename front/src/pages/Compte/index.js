import React from "react";
import styled from "styled-components";
import { CompteTemplate } from "../../components/templates";

const Compte = ({ tokenHeader, user }) => {
    return (
        <Container>
            <CompteTemplate tokenHeader={ tokenHeader } user={ user } />
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
`;

export default Compte;