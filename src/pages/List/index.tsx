import React from "react";

import { Container } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

const List: React.FC = () => {

    const options = [
        {value: 'Marcos', label: 'Marcos'},
        {value: 'Fatinha', label: 'Fatinha'},
        {value: 'Maria', label: 'Maria'},
        {value: 'Pedro', label: 'Pedro'},
        {value: 'Iago', label: 'Iago'},
    ];

    return(
        <Container>
            <ContentHeader title="Titulados" lineColor="#F7931B">
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>
    );
}

export default List;