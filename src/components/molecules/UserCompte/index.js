import React from 'react';
import { Label } from '../../atoms';
import styled from 'styled-components';

const UserCompte = ({ user }) => {
    const userId = localStorage.getItem("userId");

    const styleLabel = {
        "text-align": "initial",
        "font-weight": "700",
        "margin-bottom": "5%"
    }

    return (
        <Container>
            {user.map(e => {
                if(e.id === userId){
                    return(<>
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
                    </>)
                }
                return true;
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