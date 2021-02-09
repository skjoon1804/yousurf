import React from 'react';
import { connect } from 'react-redux';

export const Profile = ({}) => {

    return (
        <></>
    )
}

const mapStateToProps = (state) => {
    return state;
}

export const ConnectedProfile = connect(mapStateToProps)(Profile);