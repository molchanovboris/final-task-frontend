import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchWeather } from '../../redux/action/weather.thunk';
import Autocomplete from 'react-google-autocomplete';

import  TopNav from '../TopNav';



class WeatherPage extends Component {

    onPlaceSelected = async (place) => {
        const lng = place.geometry.location.lng();
        const lat = place.geometry.location.lat();
        await this.props.fetchWeather(lat, lng);
        // await this.props.weatherHandler(this.props.Weather);
        console.log(place.formatted_address);
        // document.write(Date());
        // console.log(Date()); 
        
    }
    
    // infWeather = {
    //     date: new Date,
    //     list: [],
    //     address: [onPlaceSelected().formatted_address]
    // }


    // {
    //     date: new Date,
    //     list: [],
    //     address:

    // }

   
 
    
    renderList() {
        return this.props.weather.map((weather) => {
            return(
                
                <tr key={weather.dt_txt}>
                    <td data-label="Date">{weather.dt_txt}</td>
                    <td data-label="Temperature (Celsium)">{Math.floor(weather.main.temp - 273)}</td>
                    <td data-label="Weather condition">{weather.weather[0].description}</td>
                </tr>
                
            );
        });
    }

    // weatherHandler = formValues => {
    //     console.log(formValues);
    //     this.props.createWeather(formValues);
    //   }


    render() {
        console.log(this.props.weather);
        console.log(Date()); 
        
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
                            style={{width: '90%'}}
                            onPlaceSelected={this.onPlaceSelected}
                            types={['(regions)']}
                            componentRestrictions={{country: "ru"}}
                            
                        />
                    </div>
                    
                
                <div>
                <div >
                    {!!this.props.weather.length &&
                        <table component={this.setTable} className="ui celled table">
                            <thead>
                                <tr className="header hideHeader">
                                    <th>Date</th>
                                    <th>Temperature (Celsium)</th>
                                    <th>Weather condition</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderList()}
                            </tbody>
                        </table>     
                    }
                </div>
                {/* {this.renderUserId()} */}
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
        // currentUserId: state.auth.user._id
      };
}


export default connect(mapStateToProps, { fetchWeather }) (WeatherPage);
