import React from 'react';
import { connect } from 'react-redux';
import { removeFavorite, addFavorite } from '../../actions'
import './ResultFavoriteButton.css'

const ResultFavoriteButton = ({ userID, isFavorite, removeFavorite, addFavorite }) => {
    
    return (
        <div className="favorite-button m-4">
            {isFavorite
            ? <img width="20px" src={"http://pngimg.com/uploads/heart/heart_PNG51328.png"} onClick={() => removeFavorite(userID)}/>
            : <img width="20px" src={"http://pngimg.com/uploads/heart/heart_PNG51340.png"} onClick={() => addFavorite(userID)}/>
            }
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const isFavorite = ownProps.isFavorite;
    const userID = state.session.id;
    return {userID, isFavorite};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const videoID = ownProps.videoId;

    return {
        removeFavorite(userID) {
            dispatch(removeFavorite(userID, videoID))
        },
        addFavorite(userID) {
            dispatch(addFavorite(userID, videoID))
        }
    }
}

export const ConnectedFavoriteButton = connect(mapStateToProps, mapDispatchToProps)(ResultFavoriteButton);