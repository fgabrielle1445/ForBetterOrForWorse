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
import AnxietyInterviewQ4 from './components/AnxietyInterviewQ4/AnxietyInterview4';
import AnxietyInterviewQ5 from './components/AnxietyInterviewQ5/AnxietyInterview5';
import AnxietyInterviewQ6 from './components/AnxietyInterviewQ6/AnxietyInterview6';
import AnxietyInterviewQ7 from './components/AnxietyInterviewQ7/AnxietyInterview7';
import AnxietyInterviewQ8 from './components/AnxietyInterviewQ8/AnxietyInterview8';
import AnxietyInterviewQ9 from './components/AnxietyInterviewQ9/AnxietyInterview9';
import AnxietyInterviewQ10 from './components/AnxietyInterviewQ10/AnxietyInterview10';
import AnxietyInterviewQ11 from './components/AnxietyInterviewQ11/AnxietyInterview11';
import AnxietyInterviewQ12 from './components/AnxietyInterviewQ12/AnxietyInterview12';
import AnxietyInterviewQ13 from './components/AnxietyInterviewQ13/AnxietyInterview13';
import AnxietyInterviewQ14 from './components/AnxietyInterviewQ14/AnxietyInterview14';
import AnxietyInterviewQ15 from './components/AnxietyInterviewQ15/AnxietyInterview15';

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
          <Route path = "/home">
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
          <Route path="/interview4">
            <AnxietyInterviewQ4 />
          </Route>
          <Route path="/interview5">
            <AnxietyInterviewQ5 />
          </Route>
          <Route path="/interview6">
            <AnxietyInterviewQ6 />
          </Route>
          <Route path="/interview7">
            <AnxietyInterviewQ7 />
          </Route>
          <Route path="/interview8">
            <AnxietyInterviewQ8 />
          </Route>
          <Route path="/interview9">
            <AnxietyInterviewQ9 />
          </Route>
          <Route path="/interview10">
            <AnxietyInterviewQ10 />
          </Route>
          <Route path="/interview11">
            <AnxietyInterviewQ11 />
          </Route>
          <Route path="/interview12">
            <AnxietyInterviewQ12 />
          </Route>
          <Route path="/interview13">
            <AnxietyInterviewQ13 />
          </Route>
          <Route path="/interview14">
            <AnxietyInterviewQ14 />
          </Route>
          <Route path="/interview15">
            <AnxietyInterviewQ15 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;