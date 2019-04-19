import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'tachyons';
import BlogsPage from './Components/blogs/index';
import Edit from './Components/edit/index';
import NavBar from './Components/navBar/NavBar';
import Create from './Components/create/index';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={NavBar} />
        <Route exact path="/edit/:id" component={Edit} />
        <Route exact path="/" component={BlogsPage} />
        <Route exact path="/create" component={Create} />
      </Router>
    );
  }
}

export default App;
