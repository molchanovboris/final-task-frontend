import React, { Suspense, Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import WeatherPage from "./components/WeatherPage/WeatherPage";
import EditPage from './components/EditPage/EditPage';
import RequestHistoryList from './components/RequestsHistoryList/RequestHistoryList';
import RequestHistoryDetails from './components/RequestHistoryDetails/RequestHistoryDetails';
import Protected from './components/Protected'
import history from './history';
import Button from './components/styledComp/Button';
import Title from './components/styledComp/Title';




function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/weather" component={WeatherPage} />
            <Route exact path="/editpage" component={EditPage} />
            <Route path="/historylist" component={RequestHistoryList} />
            <Route path="/historydetails/:id" component={RequestHistoryDetails} /> */}

            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/" component={Protected} />


          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
