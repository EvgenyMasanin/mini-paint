import { ComponentType, useEffect } from "react";
import { setMaxLength, reqaired } from "../../Validators/saveFormValidators";
import { InputValidatable, TextAriaValidatable } from "./SaveFormControls/SaveFormControls";
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

interface ISaveFormProps {
    closeDialog: () => void
}

const maxLengthTitle = setMaxLength(50)
const maxLengthDescription = setMaxLength(250)

const SaveForm: ComponentType<ISaveFormProps & InjectedFormProps<InjectedFormProps<{}, {}, string>, ISaveFormProps, string>> = (props) => {
    
    useEffect(() => {
        return () => {
            props.reset()
        }
    }, [])

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="row">

                <div className="input-field col s12">
                    <Field id='title' name='title' type="text"
                        component={InputValidatable}
                        validate={[maxLengthTitle, reqaired]}
                    />
                    <label htmlFor='title'>Title</label>
                </div>

                <div className="input-field col s12">

                    <Field
                        id='description'
                        name='description'
                        type="text"
                        component={TextAriaValidatable}
                        validate={[maxLengthDescription, reqaired]}
                    />
                    <label htmlFor="description">Description</label>
                </div>
                <div className='col s4 offset-s5'>
                    <button className="btn waves-effect waves-light right" onClick={props.closeDialog}>Cancel
                        <i className="material-icons right">cancel</i>
                    </button>
                </div>
                <div className='col s3'>
                    <button className="btn waves-effect waves-light " type="submit" name="action">Submit
                        <i className="material-icons right">save</i>
                    </button>
                </div>
            </div>
        </form>
    )
}

export const SaveFormRedux = reduxForm<InjectedFormProps, ISaveFormProps>({
    form: 'saveForm'
})(SaveForm)