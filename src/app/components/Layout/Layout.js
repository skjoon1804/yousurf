import React from 'react';
import { connect } from 'react-redux';

import { ConnectedSearchResults } from '../SearchResults/SearchResults';
import { ConnectedSearchBar } from '../SearchBar/SearchBar';
import { ConnectedSidebar} from '../Sidebar/Sidebar';


export const Layout = ({ results }) => {

    return (
        <>
            <ConnectedSidebar />
            <ConnectedSearchBar />
            {results.length === 0 ? null :
            <ConnectedSearchResults  />
            }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        results: state.results
    }
}

export const ConnectedLayout =  connect(mapStateToProps)(Layout);
