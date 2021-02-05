import { ConnectedSearchResults } from './SearchResults/SearchResults';
import {React, useState, useRef} from 'react';
import { ConnectedSearchBar } from './SearchBar/SearchBar';
import { connect } from 'react-redux';


const Layout = ({results}) => {

    return (
        <div >
            <ConnectedSearchBar />
            {results.length === 0 ? null :
            <ConnectedSearchResults  />
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        results: state.results
    }
}

export const ConnectedLayout =  connect(mapStateToProps)(Layout);
