import React from "react";
import { ErrorOrga } from "../../organisms";
import styled from "styled-components";

const ErrorTemplate = () => {
    return (
        <Container>
            <ErrorOrga />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    height: inherit;
`;

export default ErrorTemplate;