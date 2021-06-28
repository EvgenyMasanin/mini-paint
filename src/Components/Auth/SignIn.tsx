import React from 'react'
import LogInContainer from './LogInContainer'
import { Redirect } from "react-router-dom";
import { useTypedSelector } from '../../Hooks/reduxHooks';

const SignIn = () => {

    // const { user } = useTypedSelector(state => { state.userData.user })
    const user = useTypedSelector(state => state.userData.user)
    console.log(user);
    if(user)
    return <div>ololololololol</div>
    return (
        <LogInContainer />
    )
}

export default SignIn
