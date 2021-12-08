import React from "react";
import styled from "styled-components";
import { RegisterOrga } from "../../organisms";

const HomeTemplate = () => {
    return (
        <Container>
            <RegisterOrga />
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
`;

export default HomeTemplate;