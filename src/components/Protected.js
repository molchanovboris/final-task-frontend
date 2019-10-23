import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import WeatherPage from "./WeatherPage/WeatherPage";
import EditPage from './EditPage/EditPage';
import RequestHistoryList from './RequestsHistoryList/RequestHistoryList';
import RequestHistoryDetails from './RequestHistoryDetails/RequestHistoryDetails';

import { checkAuth } from '../redux/action/auth.thunk';

// const isAuthenticated = false;
// const checkAuthError = true;

class Protected extends React.Component {

  componentDidMount() {
    this.props.checkAuth()
  }
  render() {
    // const { isAuthenticated, checkAuthError } = this.props;
    console.log('weather', this.props.isAuthenticated, this.props.checkAuthError)
    if (!this.props.isAuthenticated && !this.props.checkAuthError) return null
    if (!this.props.isAuthenticated && this.props.checkAuthError) return <Redirect to='/login' />
    if (this.props.isAuthenticated && !this.props.checkAuthError) return (
      <div>
        <Switch>
          <Route exact path="/weather" component={WeatherPage} />
          <Route exact path="/editpage" component={EditPage} />
          <Route exact path="/historylist" component={RequestHistoryList} />
          <Route exact path="/historydetails/:id" component={RequestHistoryDetails} />
        </Switch>
      </div>
    )
  }
}

export default connect((state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  checkAuthError: state.auth.checkAuthError
}
), {
  checkAuth
})(Protected);

// export default Protected;