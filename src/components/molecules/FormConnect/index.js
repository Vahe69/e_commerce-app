import React from "react";
import { Input, Label } from "../../atoms";
import styled from "styled-components";
import axios from 'axios';

const FormConnect = ({ setTokenHeader }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleEmailChange = (event) => { 
        setEmail(event.target.value);
    }
    
    const handlePasswordChange = (event) => { 
        setPassword(event.target.value);
    }

    const styleLabel = {
        "textAlign": "justify",
        "marginBottom": "3%",
        "fontSize": "18px"
    }

    const styleLabelError = {
        "textAlign": "justify",
        "marginBottom": "2%",
        "fontSize": "16px",
        "color": "red",
        "display": "none"
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

    const handleRegister = () => {
        console.log("test");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(process.env.REACT_APP_URL_API + 'users/auth', {
            email,
            password
        }).then((response) => {
            setTokenHeader(`Bearer ${response.data.access_token}`);
            axios.interceptors.request.use(
                config => {
                    config.headers.authorization = `Bearer ${response.data.access_token}`;
                    return config;
                },
                error => {
                    return Promise.reject(error);
                }
            );
            console.log(response.data);
            axios.get(process.env.REACT_APP_URL_API + 'users/auth')
            .then((response) => {
                window.location = "http://" + window.location.host;
            }).catch((error) => {
                console.log(error.message);
                var messError = document.getElementById("messError");
                messError.style.display = "block";
                messError.innerHTML = "Une erreur est survenue.";
            })
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

                <Login>
                    <Label attribut="Email utilisateur :" style={ styleLabel }/>
                    <Input value={email} id="email" type="email" required={true} name="login" style={ styleInput } onChange={ handleEmailChange } />
                </Login>

                <Password>
                    <Label attribut="Mot de passe :" style={ styleLabel }/>
                    <Input value={password} id="password" type="password" required={true} name="password" style={ styleInput } onChange={ handlePasswordChange }/>
                </Password>

                <Label attribut="Pas de compte ? S'enregistrer" onClick={ handleRegister } />

                <Submit>
                    <Input type="submit" style={ styleSubmit } value="Connexion" />
                </Submit>
            </form>
        </Container>
    );
}

const Container = styled.div`
    padding: 5%;
    width: 25%;
    background-color: white;
    border-radius: 5%;
`;

const Login = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10%;
`;

const Password = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10%;
`;

const Submit = styled.div`
    margin: 10%;
`;

export default FormConnect;