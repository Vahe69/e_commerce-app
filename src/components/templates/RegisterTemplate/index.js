import React from "react";
import styled from "styled-components";
import { Header, RegisterOrga } from "../../organisms";

const HomeTemplate = ({ tokenHeader }) => {
    return (
        <Container>
            <Header tokenHeader={ tokenHeader }/>
            <RegisterOrga />
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
`;

export default HomeTemplate;