import { React } from 'react';
import { connect } from 'react-redux';
import './SearchResult.css';

const SearchResult = ({url, title, channelTitle, publishedAt, description, videoId }) => {


    return (
        <div className="card flex-row m-4" >
            <div>
                <a href={`http://youtube.com/watch?v=`+videoId} target='_blank'>
                    <img src={url} className="m-2"/>
                </a>
            </div>
            <div className="card-block p-4">
                <h4><a href={`http://youtube.com/watch?v=`+videoId} target='_blank' 
                    style={{textDecoration: 'none', color: 'black'}}>{title}</a></h4>
                <h6>{channelTitle}</h6>
                <span className="text-muted">Published on {publishedAt}</span>
                <p className="py-3">{description}</p>
            </div>
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