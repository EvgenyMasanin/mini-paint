import React from 'react'
import { ComponentType, useEffect } from "react";
import { setMaxLength, reqaired, setMinLength, passwordsEquals } from "../../Validators/saveFormValidators";
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { InputValidatable } from "../ValidatableFormControls/ValidatableFormControls";
import { NavLink } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

const minLengthPassword = setMinLength(8)

const RegistrationForm: ComponentType<InjectedFormProps<InjectedFormProps<{}, {}, string>, {}, string>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit} style={{ width: 500, margin: '0 auto' }}>
            <div className="row">
                <div className="col s12 center">
                    <h1>Registration</h1>
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

                <div className="input-field col s12">
                    <i className="material-icons prefix">lock</i>
                    <Field
                        id='repeatPassword'
                        name='repeatPassword'
                        type="password"
                        component={InputValidatable}
                        validate={[passwordsEquals, minLengthPassword, reqaired]}
                    />
                    <label htmlFor="repeatPassword">Repeat password</label>
                </div>

                <div className='col s4 offset-s5'>
                    <NavLink to='/signin' className="btn waves-effect waves-light right">
                        Sign in
                    </NavLink>

                </div>
                <div className='col s3 center'>
                    <button className="btn waves-effect waves-light " type="submit" name="action">
                        Registrate
                    </button>
                </div>
            </div>
        </form>
    )
}
export const RegistrationRedux = reduxForm<InjectedFormProps>({
    form: 'registrationForm'
})(RegistrationForm)
