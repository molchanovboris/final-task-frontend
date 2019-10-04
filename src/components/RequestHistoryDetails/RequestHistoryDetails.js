import React from "react";
import { connect } from 'react-redux';
import TopNav from '../TopNav';
import WeatherPage from "../WeatherPage/WeatherPage";
// import history from '../../history';
// import { reduxForm } from "redux-form";

export class RequestHistoryDetails extends React.PureComponent {

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
                <form className="ui list">
                    <div>
                        <h1>Request History List</h1>
                    </div>
                    <div className="item">
                        <i className="marker icon"></i>
                        <div className="content">
                            Place
                        </div>
                    </div>
                    <div className="item">
                        <i className="calendar alternate outline icon"></i>
                        <div className="content">
                            Date
                        </div>
                    </div>
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
                </form>
            </>
        );
    };
};

const mapStateToProps = state => {
    return {
        weather: state.weather.data,
        // currentUserId: state.auth.user._id
    };
}

export default connect(mapStateToProps, {

})(RequestHistoryDetails);
