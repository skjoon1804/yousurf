import React from 'react';
import { connect } from 'react-redux';

export const Profile = ({}) => {

    return (
        <div className="card">
            <h1>Profile</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state;
}

export const ConnectedProfile = connect(mapStateToProps)(Profile);