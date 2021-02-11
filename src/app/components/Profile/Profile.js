import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { history } from '../../reducers/history'
import axios from 'axios';

import { ConnectedSidebar} from '../Sidebar/Sidebar';
import { setName, setEmail, setDob } from '../../actions'

export const Profile = ({
    userID, username, passwordHash, name, email, dob,
    setName, setEmail, setDob
}) => {
    const nameRef = useRef(), emailRef = useRef(), dobRef = useRef();
    const url = process.env.NODE_ENV == `production` ? `` : "http://localhost:8888";


    const submitForm = async (e) => {
        e.preventDefault();
        const currentName = nameRef.current.value;
        const currentEmail = emailRef.current.value;
        const currentDob = dobRef.current.value;

        if (currentName.trim()!=='') {
            await axios.post(url + `/user/update`, {
                user: { id: userID, name: currentName }
            })
            setName(userID, currentName);
        }
        if (currentEmail.trim()!=='') {
            await axios.post(url + `/user/update`, {
                user: { id: userID, email: currentEmail }
            })
            setEmail(userID, currentEmail);
        }
        if (currentDob.trim()!=='') {
            await axios.post(url + `/user/update`, {
                user: { id: userID, dob: currentDob }
            })
            setDob(userID, currentDob);
        }  
        if (currentName.trim()!=='' || currentEmail.trim()!=='' || currentDob.trim()!=='') {
            alert("User Profile Updated!");
            history.push("/home")
        }
    }

    return (
        <>
            <ConnectedSidebar />
            <div className="container p-3">
                <h1 className="m-2">Profile</h1>
                <div className="card m-2 p-3">
                    <form onSubmit={submitForm} className="p-4">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input className="form-control" type="text" name="username" id="username" value={username} disabled />
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordHash">Password</label>
                            <input className="form-control" type="password" name="passwordHash" id="passwordHash" value="****" disabled />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input className="form-control" type="text" name="name" id="name" placeholder={name} ref={nameRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input className="form-control" type="email" name="email" id="email" placeholder={email} ref={emailRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob">Date of Birth</label>
                            <input className="form-control" type="text" name="dob" id="dob" placeholder={dob} ref={dobRef} />
                        </div>

                        <div className="d-flex justify-content-center mt-4">
                            <button className="btn btn-primary mx-3 px-4" type="submit">Save</button>
                            <Link style={{textDecoration: 'none'}} to="/home"><button className="btn btn-light mx-3 px-4" >Cancel</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    let userID = state.session.id;
    let {username, passwordHash, name, email, dob} = state.users.find(user => user.id === state.session.id);
    return { userID, username, passwordHash, name, email, dob };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName(userID, name) {
            dispatch(setName(userID, name));
        },
        setEmail(userID, email) {
            dispatch(setEmail(userID, email));
        },
        setDob(userID, dob) {
            dispatch(setDob(userID, dob));
        }
    }
}

export const ConnectedProfile = connect(mapStateToProps, mapDispatchToProps)(Profile);
