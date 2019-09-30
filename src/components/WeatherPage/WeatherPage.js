import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
// import thunk from "redux-thunk";
import { fetchWeather } from '../../redux/action/auth.thunk';
import { Field, reduxForm } from "redux-form";
import Autocomplete from 'react-google-autocomplete';
import weatherMap from '../../api/weatherMap';
import weatherReducer from "../../redux/reducers/weatherReducer";


class WeatherPage extends React.Component {
    componentDidMount() {
        this.props.fetchWeather({lat,lng});
    }
    
    
    
    render() {
        console.log(this.props.weather);
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <h1>WeatherPage</h1>
                        <Autocomplete
                            style={{width: '90%'}}
                            onPlaceSelected={(place) => {
                                console.log(place);
                            }}
                            types={['(regions)']}
                            componentRestrictions={{country: "ru"}}
                        />
                    </div>
                </form>
            </div>
            
            
        );
              
    }
}

const mapStateToProps = state => {
    return {  weather: weatherReducer  };
}


export default connect(mapStateToProps, { fetchWeather }) (WeatherPage);
