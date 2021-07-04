import { Sidenav } from 'materialize-css'
import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { firebaseApp } from '../../Firebase/fireBase'
import { setUser } from '../../Redux/UserData/userDataActions'

const Header = () => {
    const dispatch = useDispatch()
    const signOut = () => {
        firebaseApp.auth().signOut().then(() => {
            dispatch(setUser(''))
        })
        sideNavInstance.current!.close()
    }

    const sideNav = useRef<HTMLUListElement>(null)
    const sideNavInstance = useRef<Sidenav>(null!)

    useEffect(() => {
        sideNavInstance.current = M.Sidenav.init(sideNav.current as Element)

        return () => {
            sideNavInstance.current!.destroy()
        }
    }, [])

    return (
        <header>
            <nav className='nav-extended'>
                <div className="nav-wrapper px1">
                    <span className="brand-logo">Mini paint</span>
                    <a href="#mobile-demo" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to='/main' className="">
                            <i className="material-icons left">brush</i>Draw a pic
                        </NavLink></li>
                        <li><NavLink to='/user-drawings' className="">
                            <i className="material-icons left">image</i>User drawings
                        </NavLink></li>
                        <li><NavLink to='/profile' className="">
                            <i className="material-icons left">account_box</i>Profile
                        </NavLink></li>
                        <li><NavLink to='/signin' className=""
                            onClick={signOut}
                        >
                            <i className="material-icons left">exit_to_app</i>Sign out
                        </NavLink></li>
                    </ul>
                    <ul className="sidenav" id="mobile-demo" ref={sideNav}>
                        <li><NavLink to='/main' className="">
                            <i className="material-icons left">brush</i>Draw a pic
                        </NavLink></li>
                        <li><NavLink to='/user-drawings' className="">
                            <i className="material-icons left">image</i>User drawings
                        </NavLink></li>
                        <li><NavLink to='/profile' className="">
                            <i className="material-icons left">account_box</i>Profile
                        </NavLink></li>
                        <li><NavLink to='/signin' className=""
                            onClick={signOut}
                        >
                            <i className="material-icons left">exit_to_app</i>Sign out
                        </NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
