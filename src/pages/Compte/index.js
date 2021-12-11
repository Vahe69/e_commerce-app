import React from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import { CompteTemplate } from "../../components/templates";

const Compte = ({ tokenHeader }) => {

    // Si l'utilisateur n'est pas connecter, il sera rediriger sur la page d'erreur.
    if(tokenHeader === ""){
        return <Redirect to="/404" />
    }else{
        return (
            <Container>
                <CompteTemplate tokenHeader={ tokenHeader } />
            </Container>
        );
    }
}

const Container = styled.div`
    height: 100%;
`;

export default Compte;