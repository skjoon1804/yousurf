import { ConnectedSearchResults } from './SearchResults';
import {React, useState, useRef} from 'react';
import { ConnectedSearchBar } from './SearchBar/SearchBar';
import youtube from '../../apis/youtube';
import { connect } from 'react-redux';


const Layout = ({results}) => {

    return (
        <div className="">
            {/* <ConnectedSearchBar setSearchQuery={setSearchQuery} fetchResult={fetchResult}/> */}
            <ConnectedSearchBar />
            <div>
                {results.length === 0 ? null :
                <ConnectedSearchResults />
                }
            </div>
            
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        results: state.results
    }
}

export const ConnectedLayout =  connect(mapStateToProps)(Layout);
