import React, { Component } from 'react';
import { Login } from './components/login';
import { Dashboard } from './components/dashboard';
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';

export class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Login/>
            </Route>
            <Route exact path='/dashboard'>
              <Dashboard/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
