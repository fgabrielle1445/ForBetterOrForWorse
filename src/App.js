import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import HomePage from './components/Home/HomePage';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/Preferences';
import Results from './components/Results/Results';
import useToken from './useToken';

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/home">
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;