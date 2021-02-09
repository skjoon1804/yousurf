import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ConnectedSearchResults } from '../SearchResults/SearchResults';
import { ConnectedSearchBar } from '../SearchBar/SearchBar';
import './Layout.css'

const openNav = () => { document.getElementById("sidenav").style.width = "250px"; }
const closeNav = () => { document.getElementById("sidenav").style.width = "0"; }

export const Layout = ({ results, name }) => {

    return (
        <>
            <div className="sidenav" id="sidenav">
                <h5 className="m-3">Welcome, {name}</h5>
                <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
                <Link to="/home">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/favorite">Favorite</Link>
                <div className="dropdown-divider"/>
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
    const { name } = state.users.find(user => user.id === state.session.id);
    return {
        results: state.results,
        name
    }
}

export const ConnectedLayout =  connect(mapStateToProps)(Layout);
