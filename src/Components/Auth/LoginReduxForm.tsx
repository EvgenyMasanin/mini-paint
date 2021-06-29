import { Field, InjectedFormProps, reduxForm, WrappedFieldProps } from 'redux-form'
import { TextField } from '@material-ui/core'
import { ILogInFormProps, ITextFieldProps } from "./AuthTypes";


const TextFieldForm: React.FC<WrappedFieldProps & ITextFieldProps> = ({ input, meta, ...props }) => {
    return (
        <TextField {...input} {...props} />
    )
}

const LogInForm: React.FC<InjectedFormProps & ILogInFormProps & any> = props => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" name='email' component={TextFieldForm} placeholder='Email' label="Enter email" />
            </div>

            <div>
                <Field type="password" name='password' component={TextFieldForm} placeholder="password" />
            </div>

            <div>
                <button>
                    LogIn
                </button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<InjectedFormProps, ILogInFormProps>({
    form: 'login'
})(LogInForm)