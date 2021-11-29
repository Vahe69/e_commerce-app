import React from "react";
import styled from "styled-components";
import { CompteOrga, Footer, Header } from "../../organisms";

const CompteTemplate = ({ tokenHeader, user }) => {
    return (
        <Container>
            <Header tokenHeader={ tokenHeader } />
            <CompteOrga user={ user } />
            <Footer />
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
`;

export default CompteTemplate;