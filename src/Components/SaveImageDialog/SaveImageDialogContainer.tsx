import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../Hooks/reduxHooks'
import SaveImageDialog from './SaveImageDialog'

const SaveImageDialogContainer = (props: any) => {

    return (
        <SaveImageDialog {...props}/>
    )
}

export default SaveImageDialogContainer
