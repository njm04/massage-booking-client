import { createContext } from 'react';

class Auth {
    isAuthenticated = false;

    authenticate = (cb) => {
        this.isAuthenticated = true;
        // enables user data to persist
        localStorage.setItem('isAuth', this.isAuthenticated)
        setTimeout(cb, 100);
    }

    signOut = (cb) => {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }

    authenticated() {
        return localStorage.isAuth;
    }
}

export const authContext = createContext(new Auth());