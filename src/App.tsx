import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import Welcome from './components/Welcome';

function App() {
  return (
    <Router>
      <div className="App">
      
         <Route exact path='/' component={Login} />
         <Route exact path='/Welcome' component={Welcome} />
       
      </div>
    </Router>
  );
}

export default App;
