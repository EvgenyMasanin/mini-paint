import React, { useEffect } from 'react'
import ColorPicker, { Color, useColor } from "react-pick-color";
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../Hooks/reduxHooks';
import { canvasSetColor } from '../../../Redux/Canvas/canvasActions';

const Palette = (props: any) => {

    const color = useTypedSelector(state => state.canvas.color)
    const dispatch = useDispatch()

    useEffect(() => {
        const handleClick = () => {
            props.setOpenPalette(false)
        }
        window.addEventListener('click', handleClick)
        return () => {
            if (props.setActivePrev)
                props.setActivePrev()
            window.removeEventListener('click', handleClick)
        }
    }, [])

    return (
        <div style={{ position: 'absolute', left: 50 }}>
            <ColorPicker
                color={color}
                onChange={(color) => {
                    dispatch(canvasSetColor(color.hex))
                }} hideAlpha hideInputs />
        </div>
    )
}

export default Palette
