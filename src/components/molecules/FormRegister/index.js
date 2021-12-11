import React from "react";
import { Input, Label } from "../../atoms";
import styled from "styled-components";
import axios from 'axios';

const FormRegister = () => {

    // On initialise les variables suivantes.
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [verifiedPassword, setVerifiedPassword] = React.useState("");
    const [nom, setNom] = React.useState("");
    const [prenom, setPrenom] = React.useState("");

    // Pour chaque changement de l'input suivant, on change la variable correspondante.
    const handleEmailChange = (event) => { 
        setEmail(event.target.value);
    }
    
    const handlePasswordChange = (event) => { 
        setPassword(event.target.value);
    }

    const handleVerifiedPassword = (event) => { 
        setVerifiedPassword(event.target.value);
    }
    const handleNom = (event) => { 
        setNom(event.target.value);
    }
    const handlePrenom = (event) => { 
        setPrenom(event.target.value);
    }

    const styleLabel = {
        "textAlign": "justify",
        "marginBottom": "3%",
        "fontSize": "18px"
    }

    const styleLabelError = {
        "marginBottom": "2%",
        "fontSize": "25px",
        "color": "red",
        "display": "none",
        "textAlign": "center",
        "fontWeight": "600"
    }

    const styleSubmit = {
        "width": "75%",
        "fontSize": "20px",
        "boderRadius": "15%",
        "fontFamily": "initial",
        "backgroundColor": "#424FFF",
        "color": "white",
        "textTransform": "uppercase",
        "borderRadius": "15%"
    }

    const styleInput = {
        "height": "35px",
        "borderRadius": "5%",
        "fontSize" : "18px"
    }

    // Une fois que l'utilisateur a remplir les différents input et appuyer sur le bouton enregistrer, on va envoyer une requête au back-end pour créer l'utilisateur.
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(process.env.REACT_APP_URL_API + 'users/add', {
            email,
            password,
            verifiedPassword,
            nom,
            prenom
        }).then((response) => {
            window.alert("Votre compte a été créer, veuillez vous connecter"); // On lui indique que son compte a été créer.
            window.location = window.location.origin + "/userConnect"; // On le redirige vers la page de connexion.
        }).catch((error) => {
            var messError = document.getElementById("messError");
            messError.style.display = "block";
            messError.innerHTML = error.response.data.message;
        });
    }

    return(
        <Container>
            <form onSubmit={handleSubmit}>
                <Label id="messError" style={ styleLabelError }/>

                <DivInput>
                    <Label attribut="Email utilisateur :" style={ styleLabel }/>
                    <Input value={email} id="email" type="email" required={true} name="login" style={ styleInput } onChange={ handleEmailChange } />
                </DivInput>

                <DivInput>
                    <Label attribut="Mot de passe :" style={ styleLabel }/>
                    <Input value={password} id="password" type="password" required={true} name="password" style={ styleInput } onChange={ handlePasswordChange }/>
                </DivInput>

                <DivInput>
                    <Label attribut="Vérification mot de passe :" style={ styleLabel }/>
                    <Input value={verifiedPassword} id="veriPassword" type="password" required={true} name="veriPassword" style={ styleInput } onChange={ handleVerifiedPassword }/>
                </DivInput>

                <DivInput>
                    <Label attribut="Nom :" style={ styleLabel }/>
                    <Input value={nom} id="nom" type="text" required={true} name="nom" style={ styleInput } onChange={ handleNom }/>
                </DivInput>

                <DivInput>
                    <Label attribut="Prénom :" style={ styleLabel }/>
                    <Input value={prenom} id="prenom" type="text" required={true} name="prenom" style={ styleInput } onChange={ handlePrenom }/>
                </DivInput>

                <Submit>
                    <Input type="submit" style={ styleSubmit } value="Création" />
                </Submit>
            </form>
        </Container>
    );
}

const Container = styled.div`
    padding-bottom: 2%;
    width: 100%;
    background-color: white;
    border-radius: 5%;
`;

const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5%;
`;

const Submit = styled.div`
    margin: 10%;
`;

export default FormRegister;