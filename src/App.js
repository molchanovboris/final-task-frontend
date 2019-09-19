import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import history from './history';


const App = () => {
  return (
    <div className="ui container">
         <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Register} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};  

export default App;
