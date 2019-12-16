import React, { useState } from 'react';
import { Login } from './components/login';
import { Registration } from './components/registration';
import { Dashboard } from './components/dashboard';
import { DataTables } from './components/dataTables';
import { PrivateRoute } from './components/privateRoute';
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';

export const App = () => {
  const [userInfo, setUserInfo] = useState({});
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login setUserInfo={setUserInfo}/>
          </Route>
          <Route exact path="/register">
            <Registration />
          </Route>
          <PrivateRoute exact path='/dashboard'>
            <Dashboard user={userInfo}/>
            <DataTables user={userInfo}/>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}