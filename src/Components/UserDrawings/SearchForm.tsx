import React, { ComponentType } from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { InputValidatable } from '../ValidatableFormControls/ValidatableFormControls'

interface ISearchFormProps {
    handleDiscard: () => void
}

const SearchForm: ComponentType<ISearchFormProps & InjectedFormProps<InjectedFormProps<{}, {}, string>, ISearchFormProps, string>> = props => {
    return (
        <form onSubmit={props.handleSubmit} className="col s12">
            <div className="row">
                <div className="input-field col s12">
                    <i className="material-icons prefix">search</i>
                    <Field
                        id='search'
                        name='search'
                        type="text"
                        component={InputValidatable}
                        validate={[]}
                    />
                    <label htmlFor="search">User name</label>
                </div>
                <div className="col s12 right">
                    <div className="col s6 m6 l12 row">

                        <button className="btn waves-effect waves-light right full-width" type="submit" name="action">Search
                            <i className="material-icons right">search</i>
                        </button>
                    </div>
                    <div className="col s6 m6 l12 row">
                        <button className="btn waves-effect waves-light right full-width" type="button"
                            onClick={props.handleDiscard}
                        >Discard
                            <i className="material-icons right">close</i>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export const SearchFormRedux = reduxForm<InjectedFormProps, ISearchFormProps>({
    form: 'loginForm'
})(SearchForm)
