import React from 'react';
import { connect } from 'react-redux';
import { removeFavorite, addFavorite } from '../../actions'
import './ResultFavoriteButton.css'
import axios from 'axios';

const ResultFavoriteButton = ({ 
    userID, videoID, isFavorite, 
    removeFavorite, addFavorite 
}) => {

    const url = process.env.NODE_ENV == `production` ? `` : "http://localhost:8888";

    const removeFavoriteClick = async e => {
        try {
            await axios.delete(url + `/favorite`, {
                data: {
                    userID,
                    videoID
                }
            })
        } catch (e) { console.log("Could not remove from Favorite"); }
        removeFavorite(userID)
    }
    const addFavoriteClick = async e => {
        try {
            await axios.post(url + `/favorite`, {
                favorite: {
                    userID,
                    videoID
                }
            })
        } catch (e) { console.log("Could not add to Favorite"); }
        addFavorite(userID)
    }
    
    return (
        <div className="m-4">
            {isFavorite
            ? <img className="favorite-button" width="20px" src={"http://pngimg.com/uploads/heart/heart_PNG51328.png"} onClick={removeFavoriteClick}/>
            : <img className="favorite-button" width="20px" src={"http://pngimg.com/uploads/heart/heart_PNG51340.png"} onClick={addFavoriteClick}/>
            }
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const isFavorite = ownProps.isFavorite;
    const userID = state.session.id;
    const videoID = ownProps.videoId;
    return {userID, videoID, isFavorite};
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