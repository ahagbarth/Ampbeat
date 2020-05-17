import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import {NavBar}  from '../components/index'


function App() {
  return (
      <Router >
        <NavBar ></NavBar>
      
      </Router>
  );
}

export default App;
