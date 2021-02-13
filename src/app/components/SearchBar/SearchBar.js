import React from 'react';
import { setSearchQuery, setResults, setNextPageToken } from '../../actions'
import { connect } from 'react-redux';
import './SearchBar.css';
import randomWords from 'random-words';
import { initialRequest } from '../../../apis/youtube';

const SearchBar = ({
    query, results,
    setRandomQuery, setSearchQuery, setResults, setNextPageToken
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
                <h1 id="title" className="display-2 m-3">YouSurf</h1>
                <form onSubmit={fetchResult} className="m-4 w-100">
                    <div className="mb-4">
                        <input type="text" name="query" placeholder="Enter Keyword" 
                            className="d-block m-auto input-group-lg w-50 form-control-lg" onChange={setSearchQuery} />
                    </div>
                    <button type="submit" id="search-button" className="btn btn-lg btn-outline-dark m-2 px-5">Search</button>
                    <button type="submit" id="search-button" className="btn btn-lg btn-outline-dark m-2 px-4" onClick={setRandomQuery}>I'm Feeling Lucky</button>
                </form>
            </div>
        :
            <div id="continue-search" className="text-center container p-5">
                <h2 id="title">YouSurf</h2>
                <form onSubmit={fetchResult} className="m-4">
                    <input type="text" name="query" placeholder="Enter Keyword" className="d-block m-auto input-group-lg w-50" onChange={setSearchQuery} />
                    <button type="submit" id="search-button" className="btn btn-outline-dark m-2 px-5">Search</button>
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
    const randomQuery = randomWords();
    return {
        setRandomQuery(e) {
            dispatch(setSearchQuery(randomQuery));
        },
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