import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import discovery from './pages/discovery/index.js';
import showPage from './pages/show/index.js';
import homePage from './pages/home/index.js';
import Navbar from './components/navbar/index.js';
import resultsPage from './pages/results/index.js';
import NotFound from './pages/error/index.js';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';



export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {}
    }
    this.apiKey = 'fb6a1d3f38c3d97f67df6d141f936f29';
  }
  render() {
    return (
      <Provider store={store}>
        <Router>

          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={homePage} />
              <Route exact path='/discovery' component={discovery} />
              <Route exact path='/show/:id' component={showPage} />
              <Route exact path='/search/:query' component={resultsPage} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router >
      </Provider>
    );
  }
}

export default App;
