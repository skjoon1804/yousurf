import { React, useState, useRef } from 'react';
import './SearchBar.css';

const SearchBar = ({setSearchQuery, fetchResult}) => {

    return (
        <form className="search-form" onSubmit={fetchResult}>
            <input type="text" name="query" onChange={e => setSearchQuery(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
    )
}
export default SearchBar;