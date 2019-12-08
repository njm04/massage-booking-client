import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { authContext } from '../utils/auth';

export const Logout = () => {
    const auth = useContext(authContext);
    let history = useHistory();

    const handleLogout = () => {
        localStorage.clear();
        auth.signOut(() => history.push('/'));
    }

    return(
        <button type="button" className="btn btn-light" onClick={handleLogout}>Sign out</button>
      )
}