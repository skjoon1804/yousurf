import { React, useState, useRef } from 'react';
import { setSearchQuery } from '../../actions'
import { connect, useSelector, useDispatch } from 'react-redux';
import './SearchBar.css';

const SearchBar = ({query, setSearchQuery}) => {
    console.log(query);


    return (
        <>
            {query==='' 
            ?
            <form className="search-form-start" >
                <input type="text" name="query" onChange={setSearchQuery}/>
                <button type="submit">Search</button>
            </form>
            :
            <form className="search-form-searching" >
                <input type="text" name="query" onChange={setSearchQuery}/>
                <button type="submit">Search</button>
            </form>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {query: state.query};
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchQuery(e) {
            dispatch(setSearchQuery(e.target.value));
        }
    }
}
export const ConnectedSearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBar);