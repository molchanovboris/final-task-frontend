import React from 'react';
import history from '../../history';

const TopNav = () => {
    const goToWeather = () => history.replace('/weather');
    const goToEdit = () => history.replace('/editpage');
    const goToHistoryList = () => history.replace('/historylist');
    const goToHistoryDetails = () => history.replace('/historydetails');


    return (
        <div className="ui secondary pointing menu">
                <a className="item" onClick={goToWeather}>Weather</a>
                <a className="item"  onClick={goToEdit}>Edit profile</a>
                <a className="item" onClick={goToHistoryList}>Request History List</a>
                <a className="item" onClick={goToHistoryDetails}>Request History Details</a>
       
        </div>
    )
}
export default TopNav;