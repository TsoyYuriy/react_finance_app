import React from 'react';
import './input.css';

const Input = (props) => {
	return ( 
		<input 
			type={props.type}
			placeholder={props.placeholder}
			onChange={props.onChange}
			value={props.value}
			onKeyUp={props.pressEnter}
		/>
	);
}
 
export default Input;