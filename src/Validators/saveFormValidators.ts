export enum ValidationErrors {
    MaxLengthError = 'Max count of symbols is: ',
    ReqairedError = 'Field is reqaired!'
}


export const setMaxLength = (maxLength: number) => {
    return (value: string) => {
        if (value?.length > maxLength) return ValidationErrors.MaxLengthError + maxLength
    }
}

export const reqaired = (value: string) => {
    if (value) return;
    return ValidationErrors.ReqairedError
}