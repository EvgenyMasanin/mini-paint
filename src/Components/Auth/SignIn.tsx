import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../Hooks/reduxHooks';
import { authorizeUser } from '../../Redux/UserData/userDataActions';
import { LogInFormRedux } from './LogInFormRedux'
import { Redirect } from "react-router-dom";

interface ILogInFormFields {
    email: string
    password: string
}

const SignIn = () => {

    const userName = useTypedSelector(state => state.userData.userName)

    const dispatch = useDispatch()

    const onSubmit: any = (data: ILogInFormFields) => {
        dispatch(authorizeUser(data.email, data.password))
    }

    return (
        userName ?
            <Redirect to='/main' /> :
            <LogInFormRedux onSubmit={onSubmit} />
    )
}

export default SignIn
