import React, { Component } from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { setAuthorizationToken } from './utils/setAuthorizationToken';


export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''

        };
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            email: this.state.email,
            password: this.state.password
        }

        const result = await axios.post('http://localhost:5000/login', payload);
        const token = result.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        console.log(jwt.decode(token))
    }

    render() {
        return (
            <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
                <label className="sr-only">Email address</label>
                <input 
                    value={this.state.email} 
                    onChange={this.onChangeEmail}
                    type="email" 
                    id="inputEmail" 
                    className="form-control" 
                    placeholder="Email address" 
                    required autoFocus
                />
                <label className="sr-only">Password</label>
                <input 
                    value={this.state.password} 
                    onChange={this.onChangePassword}
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
                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmit}>Sign in</button>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
            </form>
        );
    }
}