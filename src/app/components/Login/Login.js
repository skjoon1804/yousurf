import React, { useState } from 'react';
import { connect } from 'react-redux';

export const Login = ({error}) => {
    const [details, setDetails] = useState({name: "", email:"", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        // Login(details);
    }

    return (
        <form onSubmit={submitHandler }>
            <div className="form-inner">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <button type="submit">LOGIN</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => {
    return state;
}

export const ConnectedLogin = connect(mapStateToProps)(Login);