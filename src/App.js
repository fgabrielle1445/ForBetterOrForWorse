import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import HomePage from './components/Home/HomePage';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/Preferences';
import Results from './components/Results/Results';
import AnxietyInterview from './components/AnxietyInterview/AnxietyInterview'
import useToken from './useToken';

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path = "/">
            <HomePage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/interview">
            <AnxietyInterview />
          </Route>
          <Route path="/referrals">
            <Referrals />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;