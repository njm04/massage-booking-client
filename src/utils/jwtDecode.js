import jwt from 'jsonwebtoken';

export const decode = (token) => {
  try {
    const userInfo = jwt.decode(token);
    localStorage.setItem('userId', userInfo._id);
    return userInfo;
  } catch(err) {
    throw err;
  }
}