import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
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
      <div className="App">
        <header className="App-header">
          react-progressive-image
        </header>
        <Router>
          <div>
            <Link className="link" to="/">Basic</Link>{' '}
            <Link className="link" to={{pathname: '/loading'}}>With loading</Link>{' '}
            <Link className="link" to="/delay">With delay</Link>{' '}
            <Link className="link" to="/srcset">With srcSet</Link>{' '}
            
            <Switch>
              <Route path="/" exact component={Basic} />
              <Route path="/loading" component={Loading} />
              <Route path="/delay" component={Delay} />
              <Route path="/srcset" component={SrcSet} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default main;