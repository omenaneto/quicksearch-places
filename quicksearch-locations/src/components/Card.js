import React from 'react';

const Card = ({ id, url, city, country, description }) => {
	//const { id, url, city, country, description } = props;

	return (
		<div className='cardBody' style={{ backgroundImage: `url(${url})` }}>
			{/* <img className='cardBackground' alt='card landscape background' src={url} /> */}
			<div>
				<h2>
					{city}, {country}
				</h2>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Card;
