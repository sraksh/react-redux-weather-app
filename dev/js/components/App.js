import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

require('../../scss/style.scss');

class App extends Component {
	render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
	}
}
export default App;