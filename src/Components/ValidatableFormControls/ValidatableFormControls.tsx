import React from "react"
import { WrappedFieldMetaProps, WrappedFieldProps } from "redux-form"
import { ValidationErrors } from "../../Validators/formValidators";

export const InputValidatable: React.FC<WrappedFieldProps> = ({ input, meta, ...props }) => {

    const isValid = validate(meta);

    return (
        <>
            <input {...input} {...props} className={isValid} />
            {meta && <span className="helper-text" data-error={meta.error}> </span>}
        </>
    )
}

export const TextAriaValidatable: React.FC<WrappedFieldProps> = ({ input, meta, ...props }) => {

    const isValid = validate(meta);

    return (
        <>
            <textarea {...input} {...props} className={`materialize-textarea ${isValid}`} />
            {meta && <span className="helper-text" data-error={meta.error}> </span>}
        </>
    )
}

function validate(meta: WrappedFieldMetaProps) {
    if (meta.error?.includes(ValidationErrors.ReqairedError)) {
        return !meta.touched ? '' : 'invalid'
    }
    else if (meta.error?.includes(ValidationErrors.MaxLengthError)) {
        return 'invalid'
    }
    else if (meta.error?.includes(ValidationErrors.MixLengthError)) {
        return !meta.touched ? '' : 'invalid'
    }
    else if (meta.error?.includes(ValidationErrors.PasswordsEqualsError)) {
        return !meta.touched ? '' : 'invalid'
    }

    return 'valid'
}