import React from 'react';
import Card from './Card';

const CardList = ({ places }) => {
	const cardsArray = places.map((place, i) => {
		return (
			<Card
				key={place.id}
				url={place.url}
				id={place.id}
				city={place.city}
				country={place.country}
				description={place.description}
			/>
		);
	});

	return <div className='cardDisplay'>{cardsArray}</div>;
};

export default CardList;
