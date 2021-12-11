import React from 'react';
import { Li } from '../../atoms';
import styled from 'styled-components';

const Nav = ({ tokenHeader }) => {

    // Si l'utilisateur clique sur le bouton déconnexion, on clear le stockage local de l'utilisateur pour déconnecter l'utilisateur.
    const handleDeco = () => {
        const localStorage = window.localStorage;
        localStorage.clear();
    }

    // Une fonction qui retourne le bouton Accueil.
    const aHome = () => {
        return(
            <a href="/">Accueil</a>
        )
    }
    return (
        <Container>
            <Ul>
                <Li attribut={aHome()}/>
            {(() => {
                if(tokenHeader !== ""){
                    // Une fonction qui retourne le bouton Mon compte.
                    const aCompte = () => {
                        return(
                            <a href="/userCompte">Mon compte</a>
                        )
                    }
                    // Une fonction qui retourne le bouton Déconnexion.
                    const aDeco = () => {
                        return(
                            <a href="/">Déconnexion</a>
                        )
                    }
                    return(<>
                        <Li attribut={aCompte()} />
                        <Li attribut={aDeco()} onClick={ handleDeco }/>
                    </>)
                }else{
                    // Une fonction qui retourne le bouton Se connecter.
                    const aConnec = () => {
                        return(
                            <a href="/userConnect">Se connecter</a>
                        )
                    }
                    return(<>
                        <Li attribut={aConnec()}/>
                    </>)
                }
            })()}
            </Ul>
        </Container>
    );
}

const Container = styled.nav`
    width: 100%;
`;

const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    list-style: none;

    a {
        text-decoration: none;
        color: white;
    }
`;

export default Nav;