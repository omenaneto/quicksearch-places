import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { places } from './places';
import './Style.css';

class App extends Component {
	// Create state and
	constructor() {
		super();
		this.state = {
			places,
			searchfield : ''
		};
	}

	searchText = (e) => {
		return this.setState({ searchfield: e.target.value });
	};

	render() {
		const searchedPlaces = this.state.places.filter((place) => {
			return (
				place.city.toLowerCase().includes(this.state.searchfield.toLowerCase()) ||
				place.country.toLowerCase().includes(this.state.searchfield.toLowerCase())
			);
		});

		return (
			<div>
				<SearchBox searchChange={this.searchText} />
				<CardList places={searchedPlaces} />
			</div>
		);
	}
}

export default App;
