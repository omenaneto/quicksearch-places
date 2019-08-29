import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='searchHeader'>
			<h1>Search Places to Visit</h1>
			<input type='search' placeholder='Search' onChange={searchChange} />
		</div>
	);
};
export default SearchBox;
