import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
//   constructor(props) {
//     super(props);
//   }
  renderWeather(){
    return this.props.weather.map((weathers) => {
    const temps = weathers.list.map(weatherdata => weatherdata.main.temp);
    const pressure = weathers.list.map(weatherdata => weatherdata.main.pressure);
    const humidity = weathers.list.map(weatherdata => weatherdata.main.humidity);
    const { lon, lat } = weathers.city.coord;
      return(
        <tr key={weathers.city.id} >
          <td><GoogleMap lon={lon} lat={lat} /></td>
          <td><Chart data={temps} color="red" units="K" /></td>
          <td><Chart data={pressure} color="green" units="hPa"/></td>
          <td><Chart data={humidity} color="grey" units="%"/></td>
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
              <th>Temperature (K)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
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
