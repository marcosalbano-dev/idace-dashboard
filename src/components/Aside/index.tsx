import React from "react";

import logoImg from '../../assets/logo.png'
import { Container, Header, LogoImg, MenuContainer, MenuItemLink } from './styles'

const Aside: React.FC = () => {
    return(
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="Logo Idace-Dashboard" />
            </Header>

            <MenuContainer>
                <MenuItemLink href="#">
                    Dashboard
                </MenuItemLink>
            </MenuContainer>
        </Container>
        
    );
}

export default Aside;