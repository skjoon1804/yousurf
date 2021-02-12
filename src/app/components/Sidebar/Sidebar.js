import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { processAuthenticateUser } from '../../actions'
import { history } from '../../reducers/history';


const openNav = () => { document.getElementById("sidenav").style.width = "250px"; }
const closeNav = () => { document.getElementById("sidenav").style.width = "0"; }

export const Sidebar = ({name, logout}) => {

    return (
        <>
            <div className="sidenav" id="sidenav">
                <h5 className="m-3">Welcome, {name}</h5>
                <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
                <Link to="/home">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/favorite">Favorite</Link>
                <div className="dropdown-divider"/>
                <a href="/" onClick={logout}>Logout</a>
            </div>
            <span className="m-4" style={{fontSize: '30px', cursor: 'pointer', float: 'right'}} onClick={openNav}>&#9776;</span>
        </>
    );
}

const mapStateToProps = (state) => {
    const { name } = state.users.find(user => user.id === state.session.id);
    return {
        name
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout() {
            dispatch(processAuthenticateUser(""));
            history.push("/");
        }
    }
}

export const ConnectedSidebar =  connect(mapStateToProps, mapDispatchToProps)(Sidebar);