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
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default ConnectOrga;