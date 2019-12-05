import React, { useState } from 'react';
import { Login } from './components/login';
import { Dashboard } from './components/dashboard';
import { Booking } from './components/currentBookings';
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
  // const [userId, setUserId] = useState('');
  const [userInfo, setUserInfo] = useState({});
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login setUserInfo={setUserInfo}/>
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard user={userInfo}/>
            <Booking user={userInfo}/>
            {/* {localStorage.setItem('userId', userInfo._id)} */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}