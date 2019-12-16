import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  let history = useHistory();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  }

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  }

  const onChangeAge = (e) => {
    setAge(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let parseAge = parseInt(age);

    const payload = {
      email,
      password,
      firstName,
      lastName,
      parseAge
    }

    const result = await axios.post('http://localhost:5000/user/register', payload);
    if (result.data.status === 200) {
      setSuccess(true);
      setSuccessMsg(result.data.message);
      setEmail('');
      setFirstName('');
      setLastName('');
      setAge('');
      setPassword('');
      setTimeout(() => {
        history.replace('/');
      }, 4000);
    } else {
      setError(true);
      setErrorMsg(result.data.message);
    }
  }

  return (
    <form className="form-signin">
      <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
      {
        error && !success ? <div className="alert alert-danger" role="alert">
          {errorMsg}
        </div>
          : ''
      }
      {
        success ? <div className="alert alert-success" role="alert">
          {successMsg}. You will now be redirected to the login page.
        </div>
          : ''
      }
      <label className="sr-only">Email address</label>
      <input
        value={email}
        onChange={onChangeEmail}
        type="email"
        id="inputEmail"
        className="form-control"
        placeholder="Email address"
        required autoFocus
      /><br/>
      <label className="sr-only">First Name</label>
      <input
        value={firstName}
        onChange={onChangeFirstName}
        type="text"
        className="form-control"
        placeholder="First Name"
        required autoFocus
      /><br/>
      <label className="sr-only">Last Name</label>
      <input
        value={lastName}
        onChange={onChangeLastName}
        type="text"
        className="form-control"
        placeholder="Last Name"
        required autoFocus
      /><br/>
      <label className="sr-only">Age</label>
      <input
        value={age}
        onChange={onChangeAge}
        type="text"
        className="form-control"
        placeholder="Age"
        required autoFocus
      /><br/>
      <label className="sr-only">Password</label>
      <input
        value={password}
        onChange={onChangePassword}
        type="password"
        id="inputPassword"
        className="form-control"
        placeholder="Password"
        required
      /><br/>
      <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={handleSubmit}>Register</button>
    </form>
  )
}