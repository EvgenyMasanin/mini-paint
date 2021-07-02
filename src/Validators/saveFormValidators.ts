import { ILogInFormFields } from "../Components/Registration/SignUp"

export enum ValidationErrors {
    MaxLengthError = 'Max count of symbols is: ',
    MixLengthError = 'Min count of symbols is: ',
    ReqairedError = 'Field is reqaired!',
    PasswordsEqualsError = 'Passwords must be the same!'
}

export const setMaxLength = (maxLength: number) => {
    return (value: string) => {
        if (value?.length > maxLength) return ValidationErrors.MaxLengthError + maxLength
    }
}

export const setMinLength = (minLength: number) => {
    return (value: string) => {
        if (value?.length < minLength) return ValidationErrors.MixLengthError + minLength
    }
}

export const reqaired = (value: string) => {
    if (value) return;
    return ValidationErrors.ReqairedError
}

export const passwordsEquals = (repeatPassword: string, formData: ILogInFormFields) => {
    if (repeatPassword != formData.password) {
        return ValidationErrors.PasswordsEqualsError
    }
}