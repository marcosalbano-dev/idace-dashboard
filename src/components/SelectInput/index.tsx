import React from "react";

import { Container } from './styles'

interface ChildrenProps {
	children: React.ReactNode;
}
 
const SelectInput: React.FC<ChildrenProps> = ({ children }) => {
	return (
		<Container>
			<select>
				<option value="a">Maria Cecília</option>
				<option value="b">Marcos</option>
				<option value="c">Fátima</option>
			</select>
		</Container>
	)
}
 
export default SelectInput;