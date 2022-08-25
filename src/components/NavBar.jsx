import React, { Fragment } from 'react'
import {Link, NavLink, Outlet} from 'react-router-dom'

export function NavBar() {
    return (
        <Fragment>
            <ul>
                <li>
                    <Link to="/">To root</Link>
                </li>
                <li>
                    <NavLink to="/about" style={({ isActive }) => isActive ? {color: 'red'} : {color: 'blue'}} activeclassname="active">To about</NavLink>
                </li>
                <li>
                    <Link to="/error">To error</Link>
                </li>
                <li>
                    <NavLink to="/user/asd" style={({ isActive }) => isActive ? {color: 'red'} : {color: 'blue'}} activeclassname="active">To user info</NavLink>
                </li>
                
            </ul>
            <Outlet/>
        </Fragment>
    )
}
