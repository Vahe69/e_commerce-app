import React, { useState, useEffect } from 'react';
import { Label } from '../../atoms';
import styled from 'styled-components';
import axios from 'axios';

const UserCompte = () => {

    const tokenHeader = localStorage.getItem("tokenHearder");

    const [user, setUser] = useState();

    useEffect(() => {
        const fetchUser = async () => {
            axios.get(process.env.REACT_APP_URL_API + 'users/auth', {
                headers : {
                    'Authorization': tokenHeader
                }
            }).then((response) => {
                setUser(response.data);
            }).catch((error) => {
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
        "text-align": "initial",
        "font-weight": "700",
        "margin-bottom": "5%"
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
            {user.map(e => {
                return(
                    <>
                        <DivInfo>
                            <Label attribut="Email : " style={ styleLabel } />
                            <Label attribut={e.email} />
                        </DivInfo>

                        <DivInfo>
                            <Label attribut="Nom : " style={ styleLabel } />
                            <Label attribut={e.lastname} />
                        </DivInfo>

                        <DivInfo>
                            <Label attribut="Prénom : " style={ styleLabel } />
                            <Label attribut={e.firstname} />
                        </DivInfo>
                    </>
                )
            })}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 25px;
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