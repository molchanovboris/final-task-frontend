import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchWeather } from '../../redux/action/weather.thunk';
import Autocomplete from 'react-google-autocomplete';
import { Table } from 'reactstrap';
import TopNav from '../TopNav';

class WeatherPage extends React.PureComponent {

  onPlaceSelected = async (place) => {
    const lng = place.geometry.location.lng();
    const lat = place.geometry.location.lat();
    await this.props.fetchWeather(lat, lng);
    console.log(place.formatted_address);
  }

  renderList() {
    return this.props.weather.map((weather) => {
      return (
        <tr key={weather.dt_txt}>
          <td data-label="Date">{weather.dt_txt}</td>
          <td data-label="Temperature (Celsium)">{Math.floor(weather.main.temp - 273)}</td>
          <td data-label="Weather condition">{weather.weather[0].description}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <>
      <TopNav />
      <div
        className="search-bar ui segment">
        <form
          className="ui form"
        >
          <div className="field">
            <h1>WeatherPage</h1>
            <Autocomplete
              style={{ width: '100%' }}
              onPlaceSelected={this.onPlaceSelected}
              types={['(regions)']}
              componentRestrictions={{ country: "ru" }}
            />
          </div>
          <div>
            {!!this.props.weather.length &&
              <Table component={this.setTable}>
                <thead>
                  <tr>
                    <th scope="row">Date</th>
                    <th scope="row">Temperature (Celsium)</th>
                    <th scope="row">Weather condition</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderList()}
                </tbody>
              </Table>
            }
          </div>
        </form>
      </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.weather.data,
    loading: state.weather.weathersLoading
  };
}

export default connect(mapStateToProps, { fetchWeather })(WeatherPage);
