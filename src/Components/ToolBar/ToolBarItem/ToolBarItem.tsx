import React, { MutableRefObject, useRef, useState } from 'react'
import {
    IconButton,
} from '@material-ui/core'
import { IToolBarItem } from './ToolBarItemContainer';
import { CanvasTools } from '../../Types/Types';
import { useEffect } from 'react';
import 'materialize-css'
import ColorPicker from "react-pick-color";
import Palette from '../Palette/Palette';
import { canvasChangeTool } from '../../../Redux/Canvas/canvasActions';
import { useDispatch } from 'react-redux';

const ToolBarItem: React.FC<IToolBarItem> = (props) => {

    const toolItem: MutableRefObject<HTMLButtonElement | null> = useRef(null)
    const dispatch = useDispatch()

    const [openPalette, setOpenPalette] = useState(false)

    useEffect(() => {
        if (props.tool === CanvasTools.pensil)
            props.setActive(toolItem)
        document.addEventListener('DOMContentLoaded', function () {
            M.Tooltip.init(toolItem.current as Element, { outDuration: 100, position: 'left' });
        });

    }, [])

    return (
        <>
            <IconButton
                className={`tooltipped ${props.tool}`}
                data-tooltip={props.tool}
                ref={toolItem}
                aria-label={props.tool}
                onClick={(event) => {
                    props.setActive(toolItem)
                    props.changeTool(props.tool)
                    if (props.tool == CanvasTools.palette) {
                        event.stopPropagation()
                        setOpenPalette(true)
                    }
                }}
            >
                {props.children}
                {openPalette && props.tool == CanvasTools.palette &&
                    <Palette setOpenPalette={setOpenPalette} setActivePrev={props.setActivePrev} />
                }
            </IconButton>
        </>
    )
}

export default ToolBarItem

