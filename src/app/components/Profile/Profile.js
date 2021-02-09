import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ConnectedSidebar} from '../Sidebar/Sidebar';

export const Profile = ({
    username, passwordHash, name, email, dob
}) => {

    return (
        <>
            <ConnectedSidebar />
            <div className="container p-3">
                <h1 className="m-2">Profile</h1>
                <div className="card m-2">
                    <form className="p-4">
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
                            <input className="form-control" type="text" name="name" id="name" value={name} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input className="form-control" type="email" name="email" id="email" value={email} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob">Date of Birth</label>
                            <input className="form-control" type="text" name="dob" id="dob" value={dob} required />
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
    return state.users.find(user => user.id === state.session.id);
}

export const ConnectedProfile = connect(mapStateToProps)(Profile);
