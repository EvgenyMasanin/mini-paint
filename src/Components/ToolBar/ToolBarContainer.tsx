import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../Hooks/reduxHooks'
import { canvasChangeTool } from '../../Redux/Canvas/canvasActions'
import { setImage } from '../../Redux/UserData/userDataActions'
import { CanvasTool } from '../Types/Types'
import ToolBar from './ToolBar'

const ToolBarContainer = () => {

    const [open, setOpen] = React.useState(false);

    const imageURL = useTypedSelector(state => state.canvas.canvasField)
    const userName = useTypedSelector(state => state.userData.userName)

    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const changeTool = (tool: CanvasTool) => {
        dispatch(canvasChangeTool(tool))
    }

    const saveImage = (event: React.FormEvent) => {
        event.preventDefault()
        dispatch(setImage(userName, imageURL, 'Title', 'Description.....'))
    }

    return (
        <ToolBar changeTool={changeTool} saveImage={saveImage} open={open} openDialog={handleClickOpen}
            closeDialog={handleClose}
        />
    )
}

export default ToolBarContainer
