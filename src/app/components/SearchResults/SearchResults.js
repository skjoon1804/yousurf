import { React } from 'react';
import { connect } from 'react-redux';
import { ConnectedSearchResult } from '../SearchResult/SearchResult';

const SearchResults = ({results}) => {


    return (

        <>
            {results.map((item, index) => 
                <ConnectedSearchResult index={index} item={item}/>
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