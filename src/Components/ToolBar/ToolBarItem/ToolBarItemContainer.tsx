import React, { MutableRefObject, useEffect, useState } from 'react'
import { CanvasTool } from '../../Types/Types'
import ToolBarItem from './ToolBarItem'

export interface IToolBarItem {
    tool: CanvasTool
    changeTool: (tool: CanvasTool) => void
    setActive: (toolItem: MutableRefObject<HTMLButtonElement | null>) => void
    children: React.ReactNode
    setActivePrev?: () => void
}

const ToolBarItemContainer: React.FC<IToolBarItem> = (props) => {

    return (
        <ToolBarItem {...props} />
    )
}

export default ToolBarItemContainer
