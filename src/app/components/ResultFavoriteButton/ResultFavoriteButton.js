import React from 'react';
import { connect } from 'react-redux';
import './ResultFavoriteButton.css'

const ResultFavoriteButton = ({ videoID, isFavorite }) => {
    return (
        <div className="favorite-button m-4">
            {isFavorite
            ? <img width="20px" src={"http://pngimg.com/uploads/heart/heart_PNG51328.png"} onClick={() => console.log("Favorite Clicked: " + videoID)}/>
            : <img width="20px" src={"http://pngimg.com/uploads/heart/heart_PNG51340.png"} onClick={() => console.log("Not Favorite Clicked: " + videoID)}/>
            }
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const videoID = ownProps.videoId;
    const isFavorite = ownProps.isFavorite;
    return {videoID, isFavorite};
}

const mapDispatchToProps = (dispatch) => {
    return;
}

export const ConnectedFavoriteButton = connect(mapStateToProps)(ResultFavoriteButton);