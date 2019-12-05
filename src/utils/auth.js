export const auth = {
    isAuthenticated: false,
    authenticate: (cb) => {
        auth.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signOut: (cb) => {
        auth.isAuthenticated = false;
        setTimeout(cb, 100)
    }
}