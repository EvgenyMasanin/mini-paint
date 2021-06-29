import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-wrapper px1">
                    <span className="logo">Mini paint</span>

                    <ul className="right">
                        <li><NavLink to='/' className="waves-effect waves-light">
                            <i className="material-icons left">brush</i>Draw a pic
                        </NavLink></li>
                        <li><NavLink to='/user-drawings' className="waves-effect waves-light">
                            <i className="material-icons left">image</i>User drawings
                        </NavLink></li>
                        <li><NavLink to='/signin' className="waves-effect waves-light">
                            <i className="material-icons left">exit_to_app</i>Sign out
                        </NavLink></li>
                        <li><NavLink to='/profile' className="waves-effect waves-light">
                            <i className="material-icons left"></i>Profile
                        </NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
