import React from 'react';
import { Image, Label } from '../../atoms';
import styled from 'styled-components';
import axios from 'axios';

const ListProduct = () => {

    const listProduct = [
        {
            name: "Pantalon marron homme",
            image: "pant_marron_h.png",
            price: "25€"
        },
        {
            name: "Pantalon marron femme",
            image: "pant_marron_f.png",
            price: "22€"
        },
        {
            name: "Pantalon rouge homme",
            image: "pant_rouge_h.png",
            price: "27€"
        },
        {
            name: "Pantalon rouge femme",
            image: "pant_rouge_f.png",
            price: "27€"
        },
        {
            name: "T-shirt noir homme",
            image: "tshirt_noir_h.png",
            price: "10€"
        },
        {
            name: "T-shirt noir femme",
            image: "tshirt_noir_f.png",
            price: "12€"
        },
        {
            name: "T-shirt rouge homme",
            image: "tshirt_rouge_h.png",
            price: "14€"
        },
        {
            name: "T-shirt rouge femme",
            image: "tshirt_rouge_f.png",
            price: "12€"
        },
        {
            name: "Pull jaune homme",
            image: "pull_jaune_h.png",
            price: "23€"
        },
        {
            name: "Pull jaune femme",
            image: "pull_jaune_f.png",
            price: "24€"
        }
    ];

    /* axios.get(); */

    const image = "image/";

    const styleTitle = {
        "font-size": "25px",
        "font-weight": "600"
    }
        
    const styleImage = {
        "width": "20%"
    }

    const styleLabel = {
        "font-size": "25px",
        "font-wieght": "600"
    }

    return (
        <Container>
            <Label attribut="Liste des produits:" style={ styleTitle }/>
            <DivProducts>
                { listProduct.map(e => {
                    const img = image + e.image;
                    const alt = `Image du produit "${e.name}"`;
                    const price = `Prix : ${e.price}`;
                    return(
                        <DivProduct>
                            <Image src={img} alt={alt} style={ styleImage }/>
                            <Label attribut={e.name} style={styleLabel}/>
                            <Label attribut={price} style={styleLabel}/>
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