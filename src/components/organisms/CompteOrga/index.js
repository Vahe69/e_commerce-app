import React from 'react';
import styled from 'styled-components';
import { Label } from '../../atoms';
import { UserCompte } from '../../molecules';

const CompteOrga = ({ tokenHeader }) => {

    const styleTitle = {
        "fontWeight": "800",
        "fontSize": "35px"
    }

    return (
        <Container>
            <Label attribut="Information de votre compte" style={ styleTitle } />
            <UserCompte tokenHeader={ tokenHeader }/>
        </Container>
    );
}

const Container = styled.div`
    height: 75%;
`;

export default CompteOrga;