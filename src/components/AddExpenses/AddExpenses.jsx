import React from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import './AddExpenses.css';

const AddExpenses = (props) => {
	return ( 
		<div className="add-expenses">
			<div className="add-expenses__inputs">
				<Input
					type={'text'}
					placeholder={'Expense names'}
					onChange={props.onChangeName}
					value={props.valueName}
				/>

				<Input
					type={'number'}
					placeholder={'Expense price'}
					onChange={props.onChangePrice}
					value={props.valuePrice}
					pressEnter={e => props.pressEnter(e)}
				/>
			</div>
			

			<Button
				className={'add-btn'}
				click={props.clickAdd}
				text={'ADD'}
			/>
		</div>
	);
}
 
export default AddExpenses;