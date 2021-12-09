import React from 'react';
import styled from 'styled-components';
import { ListProduct } from '../../molecules';

const HomeOrga = ({ tokenHeader }) => {

    return (
        <Container>
            <ListProduct tokenHeader={ tokenHeader } />
        </Container>
    );
}

const Container = styled.div`
`;

export default HomeOrga;