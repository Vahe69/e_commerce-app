import React, { useState, useEffect } from 'react';
import { Image, Label } from '../../atoms';
import styled from 'styled-components';
import axios from 'axios';

const ListProduct = ({ tokenHeader }) => {

    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            axios.get(process.env.REACT_APP_URL_API + 'products')
                .then((response) => {
                    setListProduct(response.data);
                }).catch((error) => {
                    console.log(error.message);
                    var messError = document.getElementById("messError");
                    messError.style.display = "block";
                    messError.innerHTML = "Une erreur est survenue.";
                });
        };

        fetchProduct();
    }, []);

    const image = "image/";

    const styleTitle = {
        "fontSize": "25px",
        "fontWeight": "600"
    }
        
    const styleImage = {
        "width": "20%"
    }

    const styleLabel = {
        "fontSize": "25px",
        "fontWeight": "600"
    }

    const styleLabelDesc = {
        "fontSize": "20px",
        "fontWeight": "600"
    }

    const styleLabelError = {
        "textAlign": "justify",
        "marginBottom": "2%",
        "fontSize": "16px",
        "color": "red",
        "display": "none"
    }

    const styleLabelCom = {
        "fontSize": "25px",
        "fontWeight": "600",
        "marginTop": "5%",
        "marginBottom": "2%",
        "padding": "1%",
        "border": "solid 2px"
    }

    const handleCommander = (event) => {
        console.log(event.target.id);
    }

    return (
        <Container>
            <Label id="messError" style={ styleLabelError }/>

            <Label attribut="Liste des produits:" style={ styleTitle }/>
            <DivProducts>
                { listProduct.map(e => {
                    const key = e.id;
                    const img = image + e.image;
                    const alt = `Image du produit "${e.name}"`;
                    const price = `Prix : ${e.prix}`;
                    return(
                        <DivProduct key={key}>
                            <Image src={img} alt={alt} style={ styleImage }/>
                            <Label attribut={e.name} style={styleLabel}/>
                            <Label attribut={e.description} style={styleLabelDesc}/>
                            <Label attribut={price} style={styleLabel}/>
                            { tokenHeader === "" ?
                                <Label id={key} attribut="Commander" style={styleLabelCom} onClick={ handleCommander }/>
                                :
                                <></>
                            }
                        </DivProduct>
                    )
                })}
            </DivProducts>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
`;

const DivProducts = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const DivProduct = styled.div`
    background-color: #ebe8e8;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    margin: 2% 0%;
`;

export default ListProduct;