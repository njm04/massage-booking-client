import React, { useState } from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { useHistory, useLocation } from 'react-router-dom';
import { setAuthorizationToken } from '../utils/setAuthorizationToken';
import { auth } from '../utils/auth';

export const Login = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');
	let history = useHistory();
	let location = useLocation();

	let { from } = location.state || { from: { pathname: "/dashboard" } };

	const onChangeEmail = (e) => {
		setEmail(e.target.value);
	}

	const onChangePassword = (e) => {
		setPassword(e.target.value);
	}

	const decode = (token) => {
		try {
			const userInfo = jwt.decode(token);
			props.setUserInfo(userInfo.user);
		} catch(err) {
			throw err;
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		const payload = {
			email,
			password
		}

		const result = await axios.post('http://localhost:5000/login', payload);
		if(result.data.status === 200) {
			const token = result.data.token;
			localStorage.setItem('jwtToken', token);
			setAuthorizationToken(token);
			decode(token);
			auth.authenticate(() => {
				history.replace(from);
			});
		} else {
			setError(true);
			setErrorMsg(result.data.message);
		}


	}

	return (
		<form className="form-signin">
			<h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
			{
			error ? <div className="alert alert-danger" role="alert">
						{errorMsg}
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
			/>
			<label className="sr-only">Password</label>
			<input 
				value={password} 
				onChange={onChangePassword}
				type="password" 
				id="inputPassword" 
				className="form-control" 
				placeholder="Password" 
				required
			/>
			{/* <div class="checkbox mb-3">
				<label>
				<input type="checkbox" value="remember-me"/> Remember me
				</label>
			</div> */}
			<button className="btn btn-lg btn-primary btn-block" type="submit" onClick={handleSubmit}>Sign in</button>
			<button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
		</form>
	);
}