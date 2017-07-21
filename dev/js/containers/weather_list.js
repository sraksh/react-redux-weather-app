import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component{
//   constructor(props) {
//     super(props);
//   }
  renderWeather(){
    return this.props.weather.map((weathers) => {
    const temps = weathers.list.map(weatherdata => weatherdata.main.temp);
    const pressure = weathers.list.map(weatherdata => weatherdata.main.pressure);
    const humidity = weathers.list.map(weatherdata => weatherdata.main.humidity);
      return(
        <tr key={weathers.city.id} >
            <td className="">{weathers.city.name}</td>
            <td><Chart data={temps} color="red" /></td>  
            <td><Chart data={pressure} color="green" /></td>
            <td><Chart data={humidity} color="grey" /></td>
        </tr>
      );
    });
  }
  render(){
    return (
      <table className="table table-hover">
        <thead>
            <tr>
                <th>City</th>
                <th>Temperature</th>
                <th>Pressure</th>
                <th>Humidity</th>
            </tr>
        </thead>
        <tbody>
            {this.renderWeather()}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = state => ({
  weather: state.weather
});

// const matchDispatchToProps = dispatch => (
//   bindActionCreators({selectBook: selectBook}, dispatch)
// )
// export default WeatherList;
export default connect(mapStateToProps)(WeatherList);
