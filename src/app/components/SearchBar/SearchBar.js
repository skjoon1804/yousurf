import React from 'react';
import { setSearchQuery, setResults, setNextPageToken } from '../../actions'
import { connect } from 'react-redux';
import './SearchBar.css';

import { initialRequest } from '../../../apis/youtube';

const SearchBar = ({
    query, results,
    setSearchQuery, setResults, setNextPageToken
}) => {

    async function fetchResult(e) {
        e.preventDefault();
        if (query !== "") {
            let response = await initialRequest().get('/search', {
                params: {
                    q: query
                }
            });
            setResults(response.data.items);
            setNextPageToken(response.data.nextPageToken);
        }
    }

    return (
        <>
        {results.length === 0 
        ?
            <div className="text-center align-items-center justify-content-center d-flex flex-column h-100">
                <h1>YouSurf</h1>
                <form onSubmit={fetchResult} className="m-4 w-100">
                    <input type="text" name="query" placeholder="Enter Keyword" 
                    className="d-block m-auto input-group-lg w-50" onChange={setSearchQuery} />
                    <button type="submit" className="btn btn-outline-dark m-2 px-5">Search</button>
                    <button className="btn btn-outline-dark m-2 px-4">I'm Feeling Lucky</button>
                </form>
            </div>
        :
            <div className="text-center container">
                <h2>YouSurf</h2>
                <form onSubmit={fetchResult} className="m-4">
                    <input type="text" name="query" placeholder="Enter Keyword" 
                    className="d-block m-auto input-group-lg w-50" onChange={setSearchQuery} />
                    <button type="submit" className="btn btn-outline-dark m-2 px-5">Search</button>
                </form>
            </div>
        }
        </>
    )
}

const mapStateToProps = state => {
    return {
        query: state.query,
        results: state.results,
        nextPageToken: state.nextPageToken
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchQuery(e) {
            dispatch(setSearchQuery(e.target.value));
        },
        setResults(items) {
            dispatch(setResults(items));
        },
        setNextPageToken(token) {
            dispatch(setNextPageToken(token));
        }
    }
}
export const ConnectedSearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBar);