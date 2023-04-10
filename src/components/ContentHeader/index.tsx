import React from "react";

import { Container, TitleContainer, Controllers } from './styles'
import SelectInput from "../SelectInput";

const ContentHeader: React.FC = () => {
    return(
        <Container>
            <TitleContainer>
                <h1>Título</h1>
            </TitleContainer>
            <Controllers>
                <SelectInput>
                </SelectInput>
                <SelectInput>
                </SelectInput>
            </Controllers>
        </Container>
        
    );
}

export default ContentHeader;