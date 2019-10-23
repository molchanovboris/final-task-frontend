import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Protected from './components/Protected'
import history from './history';





function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
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
