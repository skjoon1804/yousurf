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
            <source src="https://dc700.4shared.com/img/Vpacfkm8ea/e073f0c2/dlink__2Fdownload_2FVpacfkm8ea_3Fsbsr_3Dbeb98400fed2961be8a1da2992844179a6b_26bip_3DNzYuMTcxLjI0Ni4xMjE_26lgfp_3D66_26dsid_3Dzjc9pUxo.3980a88a1492ccb56932bd77fa648044_26bip_3DNzYuMTcxLjI0Ni4xMjE_26bip_3DNzYuMTcxLjI0Ni4xMjE/preview.mp4?cuid=1450830102&cupa=5f082b6e5f691b62028fd56d2680b0df"
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