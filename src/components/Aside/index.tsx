import React from "react";

import logoImg from '../../assets/logo.png'
import { Container, Header, LogoImg, Title, MenuContainer, MenuItemLink } from './styles';
import { MdDashboard, MdAssignment, MdGrading, MdExitToApp } from 'react-icons/md';

const Aside: React.FC = () => {
    return(
        <Container>
            <Header>
                <LogoImg src={logoImg} alt="Logo Idace-Dashboard" />
                <Title>Dashboard-Idace</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="#">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href="#">
                <MdAssignment />
                    Cadastrados
                </MenuItemLink>

                <MenuItemLink href="#">
                <MdGrading />
                    Titulados
                </MenuItemLink>

                <MenuItemLink href="#">
                <MdExitToApp />
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
        
    );
}

export default Aside;