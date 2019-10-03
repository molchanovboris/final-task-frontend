import React from 'react';
import history from '../../history';

const TopNav = () => {
    const goToWeather = () => history.replace('/weather')
    const goToEdit = () => history.replace('/editpage')
    return (
        <div>
            <ul>
                <li onClick={goToWeather}>Weather</li>
                <li onClick={goToEdit}>Edit profile</li>
            </ul>
        </div>
    )
}
export default TopNav;