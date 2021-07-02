import { ComponentType, useEffect } from "react";
import { reqaired, setMinLength } from "../../Validators/formValidators";
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { InputValidatable } from "../ValidatableFormControls/ValidatableFormControls";
import { NavLink } from "react-router-dom";

const minLengthPassword = setMinLength(8)

const LogInForm: ComponentType<InjectedFormProps<InjectedFormProps<{}, {}, string>, {}, string>> = (props) => {

    useEffect(() => {
        return () => {
            props.reset()
        }
    }, [])

    return (
        <form onSubmit={props.handleSubmit} style={{ width: 500, margin: '0 auto' }}>
            <div className="row">
                <div className="col s12 center">
                    <h1>Authorization</h1>
                </div>

                <div className="input-field col s12">
                    <i className="material-icons prefix">account_circle</i>
                    <Field id='email' name='email' type="email"
                        component={InputValidatable}
                        validate={[reqaired]}
                    />
                    <label htmlFor='email'>Email</label>
                </div>

                <div className="input-field col s12">
                    <i className="material-icons prefix">lock</i>
                    <Field
                        id='password'
                        name='password'
                        type="password"
                        component={InputValidatable}
                        validate={[minLengthPassword, reqaired]}
                    />
                    <label htmlFor="password">Password</label>
                </div>
                <div className='col s4 offset-s5'>
                    <NavLink to='/signup' className="btn waves-effect waves-light right">
                        SignUp
                    </NavLink>

                </div>
                <div className='col s3 center'>
                    <button className="btn waves-effect waves-light " type="submit" name="action">
                        Login
                    </button>
                </div>
            </div>
        </form>
    )
}

export const LogInFormRedux = reduxForm<InjectedFormProps>({
    form: 'loginForm'
})(LogInForm)