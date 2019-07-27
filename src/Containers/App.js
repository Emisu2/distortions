import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';
import {distortions} from '../Components/distortions'


class App extends Component {
	constructor () {
		super()
		this.state = {
			distortions: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		this.setState({ distortions });
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { distortions, searchfield } = this.state;
		const filteredDistortions = distortions.filter(distortion => {
			return distortion.name.toLowerCase().includes(searchfield.toLowerCase());
		})
			return !distortions.length ? 
			<h2 class='tc'>LOADING</h2> :
			(
				<div className = 'tc'>
					<h1 className='f2'>COGNITIVE DISTORTIONS</h1>
					<h2>Made with love by Emily as a supplement to <a href="https://psychcentral.com/lib/15-common-cognitive-distortions/">PsychCentral article by John M. Grohol, Psy.D.</a></h2>
					
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList distortions={filteredDistortions}/>
					</Scroll>
				</div>
			);
		
	}
}

export default App;