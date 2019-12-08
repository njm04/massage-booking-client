import jwt from 'jsonwebtoken';

export const decode = (token) => {
  try {
    const userInfo = jwt.decode(token);
    localStorage.setItem('userId', userInfo.user._id);
    return userInfo;
  } catch(err) {
    throw err;
  }
}