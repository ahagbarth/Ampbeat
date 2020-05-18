import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router,  Route, Switch  } from 'react-router-dom'
import {NavBar}  from '../components/index'
import {Recommendation} from '../views/index'

function App() {
  return (
      <Router >
        <NavBar ></NavBar>
        <Switch>
            <Route path="/recommended" exact component={Recommendation}></Route>
        </Switch>
      </Router>
  );
}

export default App;
