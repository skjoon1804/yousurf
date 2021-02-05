import { React } from 'react';
import { connect } from 'react-redux';
import { ConnectedSearchResult } from '../SearchResult/SearchResult';

const SearchResults = ({results}) => {

    return (
        <div className="px-5 py-3">
            {results.map((item, index) => 
                <ConnectedSearchResult key={index} item={item}/>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        results: state.results
    };
}

export const ConnectedSearchResults = connect(mapStateToProps)(SearchResults);