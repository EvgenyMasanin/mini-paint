import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../Hooks/reduxHooks'
import { authorizeUser, registerUser } from '../../Redux/UserData/userDataActions'
import { RegistrationRedux } from './Registration'
import { Redirect } from "react-router-dom";

export interface ILogInFormFields {
    email: string
    password: string
    repeatPassword: string
}

const SignUp = () => {

    const userName = useTypedSelector(state => state.userData.userName)

    const dispatch = useDispatch()

    const onSubmit: any = (data: ILogInFormFields) => {
        dispatch(registerUser(data.email, data.password))
    }
    return (
        userName ?
            <Redirect to='/main' /> :
            <RegistrationRedux onSubmit={onSubmit} />
    )
}

export default SignUp
