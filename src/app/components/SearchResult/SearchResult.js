import React from 'react';
import { connect } from 'react-redux';
import './SearchResult.css';
import { ConnectedFavoriteButton } from '../ResultFavoriteButton/ResultFavoriteButton';

const SearchResult = ({
    url, title, channelTitle, publishedAt, description, videoId 
}) => {

    return (
        <div className="result card flex-row m-4">
            <div>
                <a href={`http://youtube.com/watch?v=`+videoId} target='_blank' rel="noreferrer">
                    <img src={url} className="m-2" alt="video"/>
                </a>
            </div>
            <div className="card-block w-100 p-4">
                <h4><a href={`http://youtube.com/watch?v=`+videoId} target='_blank' rel="noreferrer"
                    style={{textDecoration: 'none', color: 'black'}}>{title}</a></h4>
                <h6>{channelTitle}</h6>
                <span className="text-muted">Published on {publishedAt}</span>
                <p className="py-3">{description}</p>
            </div>
            <ConnectedFavoriteButton videoId={videoId}/>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    let convertTime = (timeString) => {
        let timestamp = new Date(timeString).getTime();
        let day = new Date(timestamp).getDate();
        let month = new Date(timestamp).getMonth() + 1;
        let year = new Date(timestamp).getFullYear();
        return (`${month}/${day}/${year}`);
    }

    return {
        url : ownProps.item.snippet.thumbnails.medium.url,
        title : ownProps.item.snippet.title,
        channelTitle : ownProps.item.snippet.channelTitle,
        publishedAt : convertTime(ownProps.item.snippet.publishedAt),
        description : ownProps.item.snippet.description,
        videoId: ownProps.item.id.videoId,
    };
}

export const ConnectedSearchResult = connect(mapStateToProps)(SearchResult);