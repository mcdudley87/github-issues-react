import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import moment from 'moment';
import Landing from './Landing';
import IssuesIndex from './IssuesIndex';
import Show from './Show';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  state = {

  }
  render() {
    return(
      <Router>
        <nav>
          <Link to="/">Landing</Link> {''}
          <Link to="/IssuesIndex">Issues</Link> {''}
          <Link to="/Show">Issue ID</Link>
        </nav>    
          <Route exact path="/" component={Landing} />
          <Route exact path="/IssuesIndex" component={IssuesIndex} />
          <Route exact path="/Show" component={Show} />
          <Route exact path="/Show/:id" />
          


      </Router>
    )
  }


}

export default App;

