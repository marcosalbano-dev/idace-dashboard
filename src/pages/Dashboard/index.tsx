import React from "react";
import ContentHeader from "../../components/ContentHeader";


import {  Container } from './styles';
import SelectInput from "../../components/SelectInput";

const Dashboard: React.FC = () => {

    const options = [
        {value: 'Marcos', label: 'Marcos'},
        {value: 'Maria', label: 'Maria'},
        {value: 'Pedro', label: 'Pedro'},
    ]

    return(
        <Container>
            <ContentHeader title="Cadastrados" lineColor="#E44C4E">
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;