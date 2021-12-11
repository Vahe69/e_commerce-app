import React, { useState, useEffect } from 'react';
import { Label } from '../../atoms';
import styled from 'styled-components';
import axios from 'axios';

const UserCompte = ({ tokenHeader }) => {

    // On initialise la variable user.
    const [user, setUser] = useState();

    useEffect(() => {
        const fetchUser = async () => {
            axios.get(process.env.REACT_APP_URL_API + 'users/auth', {
                headers : {
                    'Authorization': tokenHeader
                }
            }).then((response) => {
                setUser(response.data); // On change la variable user avec les informations de l'utilisateur connecter.
            }).catch((error) => {
                // Si le token de l'utilisateur n'est pas correcte ou est expiré, on clear le stockage local, on affiche une boite de dialogue pour avertir l'utilisateur et on le redirige vers la page d'accueil.
                // (le temps d'expiration peut être changer dans la partie back-end, dans le fichier app.module.ts).
                if(error.response.status === 401){
                    var storage = window.localStorage;
                    storage.clear();
                    window.alert("Votre session a expiré. Veuillez vous reconnecter.");
                    window.location = window.location.origin;
                }else{
                    var messError = document.getElementById("messError");
                    messError.style.display = "block";
                    messError.innerHTML = error.response.data.message;
                }
            })
        };

        fetchUser();
    }, [tokenHeader]);

    const styleLabel = {
        "textAlign": "initial",
        "fontWeight": "700",
        "marginBottom": "5%"
    }

    const styleLabelError = {
        "textAlign": "justify",
        "marginBottom": "2%",
        "fontSize": "16px",
        "color": "red",
        "display": "none"
    }

    return (
        <Container>
            <Label id="messError" style={ styleLabelError }/>
            {user ? // On regarde si l'utilisateur a bien été trouver dans la base de données.
            <>
                <DivInfo>
                    <Label attribut="Email : " style={styleLabel} />
                    <Label attribut={user.mail} />
                </DivInfo>
                
                <DivInfo>
                    <Label attribut="Nom : " style={styleLabel} />
                    <Label attribut={user.nom} />
                </DivInfo>
                
                <DivInfo>
                    <Label attribut="Prénom : " style={styleLabel} />
                    <Label attribut={user.prenom} />
                </DivInfo>
            </>
            : <></>
            }
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    fontSize: 25px;
    width: 25%;
    margin: auto;
`;

const DivInfo = styled.div`
    margin-top: 15%;
    margin-bottom: 15%;
    background-color: #ebe8e8;
    padding: 5%;
    border-radius: 5%;
`;

export default UserCompte;