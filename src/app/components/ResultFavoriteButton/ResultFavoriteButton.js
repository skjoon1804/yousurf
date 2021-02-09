import React from 'react';
import { connect } from 'react-redux';

const ResultFavoriteButton = ({videoID}) => {

    return (
        <div className="m-4">
            <img src='heart-dark.png' onClick={() => console.log("Video Clicked: " + videoID)}/>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const videoID = ownProps.videoId;
    return {videoID};
}

const mapDispatchToProps = (dispatch) => {
    return;
}

export const ConnectedFavoriteButton = connect(mapStateToProps)(ResultFavoriteButton);



// user
    //id
    // username
    // password
    // email
    // dob
    // favorite: []
