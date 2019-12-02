import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Login } from './login';
import { Dashboard } from './dashboard';

export class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <Router>
        <div className="App">
        {/* <Login></Login> */}
        <Route path="/" exact component={Login} />
        <Route path='/dashboard' exact Component={Dashboard}/>
      </div>
      </Router>
    );
  }
}
