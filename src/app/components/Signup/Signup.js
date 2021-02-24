import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import md5 from 'md5';
import axios from 'axios';
import { history } from '../../reducers/history'
import { createUser } from '../../actions';

export const Signup = ({createUser}) => {

    const url = process.env.NODE_ENV == `production` ? `` : "http://localhost:8888";
    async function signupUser(e) {
        e.preventDefault();
        const username = e.target[`username`].value;
        const password = e.target[`password`].value;
        const name = e.target[`name`].value;
        const email = e.target[`email`].value;
        const dob = e.target[`dobMonth`].value+"/"+e.target[`dobDate`].value+"/"+e.target[`dobYear`].value;
        const id = uuid();
        const passwordHash = md5(password);

        createUser(id, username, passwordHash, name, email, dob);
        try {
            await axios.post(url + `/user/new`, {
                user: {
                    id,
                    username,
                    passwordHash,
                    name,
                    email,
                    dob,
                    favorite: []
                }
            })
            alert("User Created!");
            history.push("/");
        } catch (e) {
            alert("User already exists")
        }
    }

    return (
        <>
        <video autoPlay muted loop id="homeVideo">
            <source src="https://res.cloudinary.com/andersonkwon/video/upload/v1614154974/yousurf_home_uuhmlp.mp4"
            type="video/mp4"/>
        </video>
        <div className="container col-lg-6 p-0 d-flex flex-column h-100 justify-content-center">
            <div className="card border border-dark">
                <form className="p-4" onSubmit={signupUser}>
                    <h2 className="text-center mb-3">Register</h2>
                    <div className="my-4 p-2">
                        <div className="form-group row">
                            <label className="col-sm-3" htmlFor="username">Username</label>
                            <div className="col-sm-4">
                                <input className="form-control" type="text" name="username" id="username" required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3" htmlFor="password">Password</label>
                            <div className="col-sm-4">
                                <input className="form-control" type="password" name="password" id="password" required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3" htmlFor="name">Name</label>
                            <div className="col-sm-8">
                                <input className="form-control" type="text" name="name" id="name" required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3" htmlFor="email">Email</label>
                            <div className="col-sm-8">
                                <input className="form-control" type="email" name="email" id="email" required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3" htmlFor="dob">Date of Birth</label>
                            <div className="col-sm-3">
                                <select className="form-control" id="dobMonth" required>
                                    <option value="" defaultValue>Month</option>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                            </div>
                            <div className="col-sm-2">
                                <select className="form-control" id="dobDate" required>
                                    <option value="" defaultValue>Date</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                            </div>
                            <div className="col-sm-3">
                                <input className="form-control" type="number" name="dobYear" id="dobYear" placeholder="Year" 
                                min="1900" max="2021" required/>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-outline-success m-2" type="submit">Let's Go!</button>
                        <Link to="/"><button className="form-control btn m-2">Cancel</button></Link>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser(id, username, passwordHash, name, email, dob) {
            dispatch(createUser(id, username, passwordHash, name, email, dob))
        }
    }
}

export const ConnectedSignup = connect(mapStateToProps, mapDispatchToProps)(Signup);