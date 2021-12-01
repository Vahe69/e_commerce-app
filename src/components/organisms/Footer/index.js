import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../molecules';
import styled from 'styled-components';
import { Label } from '../../atoms';

const Footer = () => {

    const styleLink = {
        "width": "100%"
    }

    const styleLabel = {
        "width": "100%"
    }

    return (
        <Container>
            <Label attribut="Copyright @2021 Shopping community. All rights reserved." style={styleLabel} />
            <Link className="brand" to="/" style={styleLink}>
                <Logo/>
            </Link>
        </Container>
    );
}

const Container = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: gray;
    margin: auto;
    height: 15%;
`;

export default Footer;