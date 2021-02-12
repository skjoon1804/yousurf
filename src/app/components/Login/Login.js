import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {history} from '../../reducers/history';
import { setState, processAuthenticateUser } from '../../actions';
import './Login.css'

export const Login = ({ authenticated, setState, processAuthenticateUser }) => {

    const url = process.env.NODE_ENV == `production` ? `` : "http://localhost:8888";

    async function authenticateUser(e) {
        e.preventDefault();
        let username = e.target[`username`].value;
        let password = e.target[`password`].value;

        try {
            const { data } = await axios.post(url + `/authenticate`, {username, password});
            setState({...data.state});
            processAuthenticateUser(`AUTHENTICATED`);
            history.push('/home');
        } catch (e) {
            processAuthenticateUser(`NOT_AUTHENTICATED`);
        }
    }

    return (
        <>
        <video autoPlay muted loop id="homeVideo">
            <source src="https://cdn-cf-east.streamable.com/video/mp4/rytl8j.mp4?Expires=1613344980&Signature=OqkMCYuU1PDD89xeVYnSHoXM63bmZnDtYzt8ighMvRMVx-XrR0m~PcdNii-PiCP~~j6XF06bu4AJZgvjvusUyvuYB0YUz25Wf2ucHNJR872HVR2JHBkGijSoJtExqriFl11AHH9eXkqoUtDjnN~uorc2GY5ufV-jDkIiwIE68mPnKnugvCqcoU~FScWpGpDvJrqV8wwaO-aRoSlzhFeZqhTwEo2zhBkw7XP55o~2d7vIL0XGqUrtDQbG-4kd49R64p9RRwB8FGgV1griYzFod4gafJ~yMk7kAMRKgVJD8-MnuiJZFGmP15Jwk0pvFK53~Th2cHgAUBrHo1WazwFrpQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ" 
            type="video/mp4"/>
        </video>
        <div className="container col-md-3 p-0 d-flex flex-column h-100 justify-content-center">
            <div className="card">
                <form className="p-4" onSubmit={authenticateUser}>
                    <h2 className="text-center">Login</h2>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input className="form-control" type="text" name="username" id="username" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input className="form-control" type="password" name="password" id="password" required/>
                    </div>
                    <button className="form-control btn btn-outline-secondary" type="submit">LOGIN</button>
                </form>
                {authenticated === `NOT_AUTHENTICATED` ? <p className="text-center text-danger">LOGIN INCORRECT</p> : null}
                <div className="card-footer">
                    <p>New to YouSurf?  <Link to="/signup">Register</Link></p>
                </div>
            </div>
        </div>
        </>
    )
}

const mapStateToProps = ({session}) => {
    return {
        authenticated: session.authenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setState(state) {
            dispatch(setState(state));
        },
        processAuthenticateUser(status, session) {
            dispatch(processAuthenticateUser(status, session));
        }
    }
}

export const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);