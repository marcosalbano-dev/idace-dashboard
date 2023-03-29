import React, { useState } from 'react';

import { Container, ToggleLabel, ToggleSeletor } from './styles';

const Toggle: React.FC = () => {

    const [online, setOnline] = useState(true);

    return(
        <Container>
        <ToggleLabel>Light</ToggleLabel>
        <ToggleSeletor 
            checked ={online}
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={() => setOnline(!online)} 
        />
        <ToggleLabel>Dark</ToggleLabel>
    </Container>
    );
}

export default Toggle;