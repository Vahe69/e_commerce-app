import React from 'react';
import styled from 'styled-components';
import { Label } from '../../atoms';
import { UserCompte } from '../../molecules';

const CompteOrga = () => {

    const styleTitle = {
        "font-weight": "800",
        "font-size": "35px"
    }

    return (
        <Container>
            <Label attribut="Information de votre compte" style={ styleTitle } />
            <UserCompte/>
        </Container>
    );
}

const Container = styled.div`
    height: 75%;
`;

export default CompteOrga;