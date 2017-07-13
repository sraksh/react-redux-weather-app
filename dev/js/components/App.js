import React, {Component} from 'react';
import SearchBar from '../containers/search_bar';
require('../../scss/style.scss');

class App extends Component {
	render() {
    return (
      <div>
        <SearchBar/>
      </div>
    );
	}
}
export default App;