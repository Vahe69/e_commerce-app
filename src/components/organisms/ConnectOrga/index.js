import React from 'react';
import styled from 'styled-components';
import { FormConnect } from '../../molecules';

const ConnectOrga = ({ setTokenHeader }) => {

    return (
        <Container>
            <FormConnect setTokenHeader={ setTokenHeader } />
        </Container>
    );
}

const Container = styled.div`
    padding-top: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dbdbdb;
`;

export default ConnectOrga;