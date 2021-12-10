import React from 'react';
import { Image } from '../../atoms';
import ImageLogo from '../../../image/logo.png';
import styled from 'styled-components';

const Logo = () => {

    const styleLogo = {
        width: "25%",
        padding: "5px",
        borderRadius: "10%"
    }

    return (
        <Container>
            <Image src={ImageLogo} alt="Logo du site web." style={ styleLogo }/>
        </Container>
    );
}

const Container = styled.div``;

export default Logo;