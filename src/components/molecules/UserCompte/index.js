import React, { useState, useEffect } from 'react';
import { Label, Li } from '../../atoms';
import styled from 'styled-components';
import axios from 'axios';

const UserCompte = ({ tokenHeader }) => {

    // On initialise la variable user.
    const [user, setUser] = useState();
    const [commande, setCommande] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            axios.get(process.env.REACT_APP_URL_API + 'users/auth', {
                headers : {
                    'Authorization': tokenHeader
                }
            }).then((response) => {
                setUser(response.data); // On change la variable user avec les informations de l'utilisateur connecter.
                axios.get(process.env.REACT_APP_URL_API + 'users/commande', {
                    headers : {
                        'Authorization': tokenHeader
                    }
                }).then((response) => {
                    setCommande(response.data); // On change la variable commande avec la liste de commande de l'utilisateur connecter.
                }).catch((error) => {
                    var messError = document.getElementById("messError");
                    messError.style.display = "block";
                    messError.innerHTML = "Une erreur est survenue";
                })
            }).catch((error) => {
                // Si le token de l'utilisateur n'est pas correcte ou est expiré, on clear le stockage local, on affiche une boite de dialogue pour avertir l'utilisateur et on le redirige vers la page d'accueil.
                // (le temps d'expiration peut être changer dans la partie back-end, dans le fichier app.module.ts).
                if(error.response.status === 401){
                    var storage = window.localStorage;
                    storage.clear();
                    window.alert("Votre session a expiré. Veuillez vous reconnecter.");
                    window.location = window.location.origin;
                // Sinon on retourne l'erreur dans le message d'erreur.
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

    const styleLi = {
        "marginBottom": "5%"
    }

    return (
        <Container>
            <Label id="messError" style={ styleLabelError }/>
            {user ? // On regarde si l'utilisateur a bien été trouver dans la base de données.
            <>
                <DivGlobal>
                    <div>
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
                    </div>
                    <div>
                        <Label  attribut="Votre liste de commande :"/>
                        <Ul>
                            {commande.map((e) => {
                                const attriInfo = () => {
                                    return (
                                        <>
                                            <Label attribut={e.name}/>
                                            <br></br>
                                            <Label  attribut={e.description}/>
                                        </>                                        
                                    )
                                }
                                return(
                                    <Li key={e.id} attribut={attriInfo()} style={ styleLi }/>
                                )
                            })
                            }
                        </Ul>
                    </div>
                </DivGlobal>
            </>
            : <></>
            }
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    width: 75%;
    margin: auto;
    height: 80%;
`;

const DivInfo = styled.div`
    margin-top: 15%;
    margin-bottom: 15%;
    background-color: #ebe8e8;
    padding: 5%;
    border-radius: 5%;
`;

const DivGlobal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 100%;
    align-items: center;
`;

const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    font-weight: 600;
`;

export default UserCompte;