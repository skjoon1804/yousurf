import React from 'react';
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
            <source src="https://dc700.4shared.com/download/Vpacfkm8ea/yousurf_home.mp4?tsid=20210215-184334-802f0132&sbsr=322a935a60b5dcb1b62e267978d1d198a6b&bip=NzIuMjExLjIxNC4xNTg&lgfp=30"
            type="video/mp4"/>
        </video>
        <div className="container col-md-3 p-0 d-flex flex-column h-100 justify-content-center">
            <div className="card border border-dark">
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