import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import WeatherPage from "./WeatherPage/WeatherPage";
import EditPage from './EditPage/EditPage';
import RequestHistoryList from './RequestsHistoryList/RequestHistoryList';
import RequestHistoryDetails from './RequestHistoryDetails/RequestHistoryDetails';

import { checkAuth } from '../redux/action/auth.thunk';

const isAuthenticated = false;
const checkAuthError = true;

class Protected extends React.Component {

    componentDidMount() {
        // this.props.checkAuth()
    }
    render() {
        // const { isAuthenticated, checkAuthError } = this.props;
        if(!isAuthenticated && !checkAuthError) return null
        if(!isAuthenticated && checkAuthError) return <Redirect to='/login'/>
        if(isAuthenticated && !checkAuthError) return (
            <Switch>
                <Route exact path="/weather" component={WeatherPage} />
                <Route exact path="/editpage" component={EditPage} />
                <Route exact path="/historylist" component={RequestHistoryList} />
                <Route exact path="/historydetails/:id" component={RequestHistoryDetails} />
            </Switch>
        )
    }
}

export default connect((state) => (
    isAuthenticated: state.auth.isAuthenticated,
    checkAuthError: state.auth.checkAuthError
), {
    checkAuth
})(Protected);

export default Protected;