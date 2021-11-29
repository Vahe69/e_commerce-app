import React from "react";
import styled from "styled-components";
import { HomeTemplate } from "../../components/templates";

const Home = ({ tokenHeader }) => {
    return (
        <Container>
            <HomeTemplate tokenHeader={ tokenHeader } />
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
`;

export default Home;