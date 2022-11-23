import React from 'react';
import Card from './Card/Card';
import './Cards.css';

const Cards = ({expenses, remove}) => {
	return ( 
		<div className="cards">
		{expenses.map(c => {
			return (
				<Card
					key={c.id}
					text={c.title}
					price={c.price}
					classBtn={'remove-btn'}
					remove={e => remove(e, c.id)}
				/>
			)
		})}
		</div>
	);
}
 
export default Cards;