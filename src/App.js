import React, { useState } from 'react';
import { Login } from './components/login';
import { Dashboard } from './components/dashboard';
import { DataTables } from './components/dataTables';
import { Booking } from './components/currentBookings';
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
  console.log(userInfo)
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login setUserInfo={setUserInfo}/>
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