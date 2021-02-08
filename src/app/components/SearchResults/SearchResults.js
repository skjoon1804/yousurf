import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import { ConnectedSearchResult } from '../SearchResult/SearchResult';
import { setNextPageToken, addResults } from '../../actions'
import { nextRequest } from '../../../apis/youtube';

const SearchResults = ({query, results, nextPageToken, setNextPageToken, addResults}) => {

    async function loadResult() {
        let loadingTarget = document.getElementById("spinner-border");
        let spinnerArea = document.getElementById("spinner-buffer");
        
        if (window.scrollY + window.innerHeight >= spinnerArea.offsetTop + spinnerArea.offsetHeight) {
            loadingTarget.style.display = 'block';
            let response = await nextRequest(nextPageToken).get('/search', {
                params: {
                    q: query
                }
            });
            setNextPageToken(response.data.nextPageToken);
            addResults(response.data.items);
            loadingTarget.style.display = 'none';
        }
    }
        
    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", loadResult);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", loadResult);
        };
    });

    return (
        <>
            <div className="px-5 py-3" id="results">
                {results.map((item, index) => 
                    <ConnectedSearchResult key={index} item={item}/>
                )}
            </div>
            <div id="spinner-border" style={{display: 'block'}} className="spinner-border mx-auto p-4"></div>
            <div className="p-5 m-2" id="spinner-buffer"></div>
            
        </>
 
    )
}

const mapStateToProps = (state) => {
    return {
        query: state.query,
        results: state.results,
        nextPageToken: state.nextPageToken
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNextPageToken(token) {
            dispatch(setNextPageToken(token));
        },
        addResults(results) {
            dispatch(addResults(results));
        }
    }
}

export const ConnectedSearchResults = connect(mapStateToProps, mapDispatchToProps)(SearchResults);