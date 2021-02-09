import React from 'react';
import { connect } from 'react-redux';

export const Favorite = ({}) => {

    return (
        <></>
    )
}

const mapStateToProps = (state) => {
    return state;
}

export const ConnectedFavorite = connect(mapStateToProps)(Favorite);