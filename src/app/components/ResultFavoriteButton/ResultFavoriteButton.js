import React from 'react';
import { connect } from 'react-redux';
import './ResultFavoriteButton.css'

const ResultFavoriteButton = ({videoID}) => {
    return (
        <div className="favorite-button m-4">
            <img width="20px" src={"http://pngimg.com/uploads/heart/heart_PNG51328.png"} onClick={() => console.log("Video Clicked: " + videoID)}/>
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

// no fav: http://pngimg.com/uploads/heart/heart_PNG51340.png
// fav:    http://pngimg.com/uploads/heart/heart_PNG51328.png

// user
    //id
    // username
    // password
    // email
    // dob
    // favorite: []
