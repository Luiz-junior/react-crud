import React from 'react';
import { Link, Route } from 'react-router-dom';
import PersonList from './PersonList';


export default class Header extends React.Component {

    render() {
        return (
            <div className="container">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">CRUD</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/"><a className="nav-link"> Home </a></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/personList"><a className="nav-link"> PersonList </a></Link>
                            </li>
                            
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

                {/* <Route path="/" component={App} /> */}
                {/* <Route path="/personList" component={PersonList} /> */}

            </div>

            
        );
    }








}