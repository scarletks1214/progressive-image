import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';

import Basic from './basic';
import Delay from './delay';
import Loading from './loading';
import SrcSet from './srcSet';

import './main.css';

class main extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className="App App-header">
            <NavLink className="link" exact to="/">Basic</NavLink>
            <NavLink className="link" to='/loading'>With loading</NavLink>
            <NavLink className="link" to="/delay">With delay</NavLink>
            <NavLink className="link" to="/srcset">With srcSet</NavLink>
          </header>
          <div>
            <Switch>
              <Route path="/" exact component={Basic} />
              <Route path="/loading" component={Loading} />
              <Route path="/delay" component={Delay} />
              <Route path="/srcset" component={SrcSet} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default main;