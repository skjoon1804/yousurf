import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { removeFavorite } from '../../actions'
import { ConnectedSidebar } from '../Sidebar/Sidebar';
import './Favorite.css';

export const Favorite = ({
    favorites, userID,
    removeFavorite
}) => {

    const url = process.env.NODE_ENV == `production` ? `` : "http://localhost:8888";
    const removeFavoriteClick = async (userID, videoID) => {
        try {
            removeFavorite(userID, videoID)
            await axios.delete(url + `/favorite`, {
                data: {
                    userID,
                    videoID
                }
            })
        } catch (e) { console.log("Could not remove from Favorite" + e); }
    }


    return (
        <>
            <ConnectedSidebar />
            <div className="container p-3">
                <h1 id="favorite-title" className="m-2">My Favorites</h1>
                <div className="m-2 p-3">
                    <p><b>{favorites.length}</b> results found...</p>
                    {favorites.length !== 0 ?
                        <div className="m-4">
                            {favorites.map((favorite, index) =>
                                <div key={index} className="favorite">
                                    <div className="card flex-row m-3">
                                        <a href={`http://youtube.com/watch?v=`+favorite.videoID} target='_blank' rel='noreferrer'>
                                            <img src={favorite.imageUrl} alt="video"/>
                                        </a>
                                        <div className="card-block m-3 w-100">
                                            <h5>{favorite.title}</h5>
                                            <p>{favorite.description}</p>
                                        </div>
                                        <div className="m-4">
                                            <button onClick={() => removeFavoriteClick(userID, favorite.videoID)} className="d-inline remove btn">&times;</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div> :
                        <h4 className="text-center container p-5">&#x1f30a; Go and have fun surfing &#x1f30a;</h4>
                    }

                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    let {favorite} = state.users.find(user => user.id === state.session.id);
    const userID = state.session.id;

    return {favorites: favorite, userID};
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFavorite(userID, videoID) {
            dispatch(removeFavorite(userID, videoID))
        }
    };
}

export const ConnectedFavorite = connect(mapStateToProps, mapDispatchToProps)(Favorite);