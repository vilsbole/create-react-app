import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Routes from './routes';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path={Routes.root.path}
          component={Routes.root.component}
        />
        <Route
          exact
          path={Routes.home.path}
          component={Routes.home.component}
        />
        <Route
          exact
          path={Routes.demo.path}
          component={Routes.demo.component}
        />
      </Switch>
    </div>
  );
};

export default App;
