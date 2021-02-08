import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const Login = () => {
    const [details, setDetails] = useState({name: "", email:"", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        // Login(details);
    }

    return (
        <div className="container col-md-3 p-0 d-flex flex-column h-100 justify-content-center">
            <div className="card">
                <form className="p-4" onSubmit={submitHandler}>
                    <h2 className="text-center">Login</h2>
                    <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input className="form-control" type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input className="form-control" type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                    <button className="form-control btn btn-outline-secondary" type="submit">LOGIN</button>
                </form>
                <div className="card-footer">
                    <p>New to YouSurf?  <Link to="/signup">Sign up</Link></p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    // authenticateUser(e)
}

export const ConnectedLogin = connect(mapStateToProps)(Login);