import React from 'react';

import { Home, Leaderboard, Plan, Transport } from 'pages';
import { Navbar } from 'components/navbar';
import { Route, Switch } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <Switch>
      <div className="App">
        <Navbar></Navbar>
        <Route exact path="/" component={Home} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/plan" component={Plan} />
        <Route path="/transport" component={Transport} />
      </div>
    </Switch>
  );
};

export default App;
