import { ConnectedSearchResults } from '../SearchResults/SearchResults';
import { React } from 'react';
import { ConnectedSearchBar } from '../SearchBar/SearchBar';
import { connect } from 'react-redux';
import './Layout.css'

const openNav = () => {
    document.getElementById("sidenav").style.width = "250px";
}

const closeNav = () => {
    document.getElementById("sidenav").style.width = "0";
}

const Layout = ({results}) => {

    return (
        <>
            <div className="sidenav" id="sidenav">
                <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
                <a href="#">Home</a>
                <a href="#">Profile</a>
                <a href="#">Favorites</a>
                <a href="#">Logout</a>
            </div>

            <span className="m-4" style={{fontSize: '30px', cursor: 'pointer', float: 'right'}} onClick={openNav}>&#9776;</span>
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
