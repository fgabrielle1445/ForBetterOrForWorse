import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Referrals from './components/Referrals/Referrals';
import Dashboard from './components/Dashboard/Dashboard';
import HomePage from './components/Home/HomePage';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/Preferences';
import Results from './components/Results/Results';
import AnxietyInterview from './components/AnxietyInterview/AnxietyInterview';
import AnxietyInterviewQ2 from './components/AnxietyInterviewQ2/AnxietyInterview2';
import AnxietyInterviewQ3 from './components/AnxietyInterviewQ3/AnxietyInterview3';

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
          <Route path="/interview2">
            <AnxietyInterviewQ2 />
          </Route>
          <Route path="/interview3">
            <AnxietyInterviewQ3 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;