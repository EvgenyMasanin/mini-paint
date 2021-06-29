// import { TextField } from '@material-ui/core'
// import { Button } from '@material-ui/core'
// import React from 'react'
// import { Field, InjectedFormProps, reduxForm } from 'redux-form'
// import {
//     WrappedFieldProps
// } from 'redux-form/lib/Field'
import { useDispatch } from 'react-redux'
import { setUser } from '../../Redux/UserData/userDataActions'
import { IFormFields } from './AuthTypes'
import { LoginReduxForm } from './LoginReduxForm'


const LogIn = () => {

    const dispatch = useDispatch()

    //FIXME:
    const login: any = (formData: IFormFields) => {
        console.log(formData)
        // console.log('as');
        
        // if (formData.email && formData.password)
        // dispatch(setUser(formData))
    }

    return (
        <LoginReduxForm onSubmit={login} />
    )
}

// const TextFieldForm: React.FC<WrappedFieldProps & ITextFieldProps> = ({input, meta, ...props}) => {
//     console.log(input);
//     // console.log(props);


//     return (
//         <TextField {...input} {...props}>

//         </TextField>
//     )
// }

// interface ILogInFormProps {
//     login: string
// }

// interface ITextFieldProps {
//     type: string
//     placeholder: string
//     lable: string
// }

// const LogInForm: React.FC<InjectedFormProps & ILogInFormProps & any> = props => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field type="text" name='login' component={TextFieldForm} placeholder='Email' label="Enter email"/>
//             </div>

//             <div>
//                 <Field type="password" name='password' component={TextFieldForm} placeholder="password" />
//             </div>

//             <div>
//                 <button>
//                     LogIn
//                 </button>
//             </div>
//         </form>
//     )
// }

// const LoginReduxForm = reduxForm<InjectedFormProps, ILogInFormProps>({
//     form: 'login'
// })(LogInForm)


export default LogIn
