import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Header from './components/Header';
import history from './history';


const App = () => {
  return (
    <div className="ui container">
         <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Registration} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};  

export default App;
