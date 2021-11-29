import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, Nav } from '../../molecules';
import styled from 'styled-components';

const Header = ({ tokenHeader }) => {

    const styleLink = {
        "width": "80%"
    }

    return (
        <Container>
            <Link to="/" style={ styleLink }>
                <Logo/>
            </Link>
            <Nav tokenHeader={ tokenHeader } />
        </Container>
    );
}

const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: gray;
    margin: auto;
    height: 10%;
`;

export default Header;