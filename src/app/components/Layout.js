import { ConnectedSearchResults } from './SearchResults/SearchResults';
import {React} from 'react';
import { ConnectedSearchBar } from './SearchBar/SearchBar';
import { connect } from 'react-redux';


const Layout = ({results}) => {

    return (
        <>
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
