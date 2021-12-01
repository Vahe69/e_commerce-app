import React from "react";
import styled from "styled-components";
import { Header, HomeOrga, Footer } from "../../organisms";

const HomeTemplate = ({ tokenHeader }) => {
    return (
        <Container>
            <Header tokenHeader={ tokenHeader } />
            <HomeOrga />
            <Footer />
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
`;

export default HomeTemplate;