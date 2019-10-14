import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CustomNavbar extends Component{
    render()    {
        return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Easy Move</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="/home">Home</a></li>
                    &nbsp;&nbsp;
                    <li><a href="/contact">contact</a></li>
                    &nbsp;&nbsp;
                    <li><a href="/about">About</a></li>
                </ul>
                <form className="form-inline my-2 my-lg-0" action="/action_page.php">
                <a className="navbar-brand" href="/filter">Filter</a>
                </form>
            </div>
        </nav>
        )
    }
}