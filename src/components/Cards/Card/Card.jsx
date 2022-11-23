import React from 'react';
import Button from '../../UI/Button/Button';
import './Card.css';

const Card = (props) => {
	return ( 
		<div className="card">
			<p className="card__text">{props.text}</p>
			<p className="card__price">{props.price} kzt</p>
			<Button
				text={'X'}
				className={props.classBtn}
				click={props.remove}
			/>
		</div>
	);
}
 
export default Card;