import React, { Fragment, useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from '../../../static/images/work-at-low-resolution-logo-black-on-transparent-background.png'
import "./Navbar.css"

import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';

const Navbar = () => {

    return <Fragment>
        <div className="pg-container">
            <div className="pg-header link2">
                <nav className="landing">
                    <div className="nav-list">
                        <Link className="logo" to={"/boards"} reloadDocument><img src={logo} className="App-logo" alt="logo" /></Link>
                        <div className="_link">
                            <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Không gian làm việc khác
                            </Link>
                            <div className="worklistset">
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item workspacelist" >Action</a></li>
                                    <li><a className="dropdown-item workspacelist" >Another action</a></li>
                                    <li><a className="dropdown-item workspacelist" >Something else here</a></li>
                                </ul>
                            </div>
                            </div>
                        <div className="_link">
                            <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Gần đây
                            </Link>
                            <div className="worklistset">
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item workspacelist" >Action</a></li>
                                    <li><a className="dropdown-item workspacelist" >Another action</a></li>
                                    <li><a className="dropdown-item workspacelist" >Something else here</a></li>
                                    <li><a className="dropdown-item workspacelist" >Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                        <input className="form-control search" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn _button" type="submit">Search</button>
                        <Link className="ring">TB</Link>
                        <Link className="mode">DD</Link>
                        <Link className="account">LOG</Link>
                    </div>
                </nav>
            </div>
            
            <div className="landing-container">
                <Outlet />
            </div>
        </div>
    </Fragment>
}

export default Navbar;
