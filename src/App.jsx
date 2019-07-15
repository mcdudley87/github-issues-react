import React from 'react';
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
  constructor(props) {
    super(props);
    this.state = {
      issues: []
    }
  }

render () {
  return (
    <>
      <Router>
        <nav>
          <img src={'poo-emoji.png'}/> {''}
          <input type="text" placeholder="Find some sh*t, yo..." class="searchbar" /> {''}
          <Link to="/">Landing</Link> {''}
          <Link to="/issuesindex">Issues</Link> {''}
          <Link to="/show">Issue ID</Link> {''}
          <Link to="/">Michael's risque selfies blog...</Link>
        </nav>    
          <Route exact path="/" component={Landing} />
          <Route exact path="/issuesindex" 
            render={() => (<IssuesIndex issues={this.state.issue} />)}
            />
          <Route exact path="/show" component={Show} />
          <Route exact path="/show/:number" />
      </Router>
      </>
    )
  }
}  

export default App;

