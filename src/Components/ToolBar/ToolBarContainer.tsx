import React from 'react'
import { useDispatch } from 'react-redux'
import { canvasChangeTool } from '../../Redux/Canvas/canvasActions'
import { CanvasTool } from '../Types/Types'
import ToolBar from './ToolBar'

const ToolBarContainer = () => {
    const dispatch = useDispatch()
    const changeTool = (tool: CanvasTool) => {
        dispatch(canvasChangeTool(tool))
    }

    return (
        <ToolBar changeTool={changeTool}/>
    )
}

export default ToolBarContainer
