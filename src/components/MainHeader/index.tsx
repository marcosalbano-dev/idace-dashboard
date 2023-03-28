import React from "react";

import { Container } from './styles'

const MainHeader: React.FC = () => {
    return(
        <Container>
            <h1>Toogle</h1>
            <Profile>
                <Welcome>Olá, </Welcome>
                <UserName>Marcos Albano</UserName>
            </Profile>
        </Container>
        
    );
}

export default MainHeader;