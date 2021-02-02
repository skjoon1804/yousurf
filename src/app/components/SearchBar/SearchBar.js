import { React, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { setSearchQuery } from '../../actions'
import './SearchBar.css';

const SearchBar = ({setSearchQuery}) => {

    return (
        <form className="search-form" >
            <input type="text" name="query" onChange={setSearchQuery}/>
            <button type="submit">Search</button>
        </form>
    )
}

const mapStateToProps = (state, ownProps) => {
    return (state);
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setSearchQuery(e) {
            dispatch(setSearchQuery(e.target.value));
        }
    }
}

export const ConnectedSearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBar);