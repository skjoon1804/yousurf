import { React } from 'react';
import { connect } from 'react-redux';

const SearchResults = ({results}) => {

    return (
        <>
            {results.map((item, index) => 
                <div key={index}>
                    <p>{item.snippet.thumbnails.high.url}</p>
                    <img src={item.snippet.thumbnails.high.url} />
                </div>
            )}
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        results: state.results
    };
}

export const ConnectedSearchResults = connect(mapStateToProps)(SearchResults);