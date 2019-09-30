import React, { Suspense, Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import WeatherPage from "./components/WeatherPage/WeatherPage";
import EditPage from './components/EditPage/EditPage'
import history from './history';

import './App.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/login">
          Login
        </Link>

        <Link to="/signup">
          Register
        </Link>
      </div>
    )
  }
}

function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/weather" component={WeatherPage}/>
            <Route path="/EditPage/:id" component={EditPage}/>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
