import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { firebaseApp } from '../../Firebase/fireBase'
import { setUser } from '../../Redux/UserData/userDataActions'

const Header = () => {
    const dispatch = useDispatch()
    const signOut = () => {
        firebaseApp.auth().signOut().then(()=>{
            dispatch(setUser(''))
        })
    }
    

    return (
        <header>
            <nav>
                <div className="nav-wrapper px1">
                    <span className="logo">Mini paint</span>

                    <ul className="right">
                        <li><NavLink to='/main' className="">
                            <i className="material-icons left">brush</i>Draw a pic
                        </NavLink></li>
                        <li><NavLink to='/user-drawings' className="">
                            <i className="material-icons left">image</i>User drawings
                        </NavLink></li>
                        <li><NavLink to='/signin' className="" 
                            onClick={signOut}
                        >
                            <i className="material-icons left">exit_to_app</i>Sign out
                        </NavLink></li>
                        <li><NavLink to='/profile' className="">
                            <i className="material-icons left"></i>Profile
                        </NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
