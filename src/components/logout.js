import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../utils/auth';

export const Logout = () => {
    let history = useHistory();

    const handleLogout = () => {
        auth.signOut(() => history.push('/'));
    }

    return(
        <button type="button" className="btn btn-light" onClick={handleLogout}>Sign out</button>
      )
}