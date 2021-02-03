import { React, useState, useRef } from 'react';
import { setSearchQuery, setResults } from '../../actions'
import { connect, useSelector, useDispatch } from 'react-redux';
import './SearchBar.css';

import youtube from '../../../apis/youtube';

const SearchBar = ({query, setSearchQuery, setResults}) => {

    async function fetchResult(e) {
        e.preventDefault();
        if (query !== "") {
            let response = await youtube.get('/search', {
                params: {
                    q: query
                }
            });
            console.log(query);
            setResults(response.data.items);
        }
    }

    const startFormStyle = {

    }
    const startInputStyle = {
        margin: "10px",
    };
    const startButtonStyle = {
        margin: "10px",

    }


    const changeFormStyle = {

    }
    const changeInputStyle = {

    }
    const changeButtonStyle = {

    }

    return (
        <div>
            <form onSubmit={fetchResult}>
                <input type="text" name="query" onChange={setSearchQuery}
                    style={query==='' ? startInputStyle : changeInputStyle}/>
                <button type="submit" 
                    style={query==='' ? startButtonStyle : changeButtonStyle}>Search</button>
            </form>
        </div>
        // <>
        //     {query==='' 
        //     ?
        //     <div>
        //         <form className="search-form-start" onSubmit={fetchResult}>
        //             <input type="text" name="query" onChange={setSearchQuery}/>
        //             <button type="submit">Search</button>
        //         </form>
        //     </div>
        //     :
        //     <form className="search-form-searching" onSubmit={fetchResult}>
        //         <input type="text" name="query" onChange={setSearchQuery}/>
        //         <button type="submit">Search</button>
        //     </form>
        //     }
        // </>
    )
}

const mapStateToProps = state => {
    return {query: state.query};
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchQuery(e) {
            dispatch(setSearchQuery(e.target.value));
        },
        setResults(items) {
            dispatch(setResults(items));
        }
    }
}
export const ConnectedSearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBar);