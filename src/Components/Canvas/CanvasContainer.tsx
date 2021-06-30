import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../Hooks/reduxHooks'
import { canvasChangeTool, canvasSetCoordinates, canvasSetField, canvasSetIsDrawing, canvasSetIsErasing } from '../../Redux/Canvas/canvasActions'
import { CanvasTool, CanvasTools } from '../Types/Types'
import Canvas from './Canvas'
import { drawPensilLine, drawCircle, drawRect, drawLine, erase } from './CanvasFunctions'

const CanvasContainer: React.FC = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null)
    let canvasContext = useRef<CanvasRenderingContext2D | null>(null)

    const dispatch = useDispatch()

    const { startX, startY, canvasField, isDrawing, isErasing, tool, color } = useTypedSelector(state => ({
        startX: state.canvas.startX,
        startY: state.canvas.startY,
        canvasField: state.canvas.canvasField,
        isDrawing: state.canvas.isDrawing,
        isErasing: state.canvas.isErasing,
        tool: state.canvas.tool,
        color: state.canvas.color,
    }))

    useEffect(() => {
        canvasContext.current = canvasRef.current!.getContext('2d')
        if (canvasContext.current && canvasRef.current) {
            canvasContext.current.fillStyle = 'white'
            canvasContext.current.lineCap = 'round'
            canvasContext.current.lineWidth = 5
            canvasContext.current.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            dispatch(canvasSetField(canvasRef.current!.toDataURL("image/png")))
        }
    }, [])

    useEffect(() => {
        canvasContext.current!.strokeStyle = color
    }, [color])

    const handleMouthDown = (event: React.MouseEvent) => {
        if (isErasing) {
            dispatch(canvasSetIsDrawing(true))
        }
        else {
            const startX = event.nativeEvent.offsetX
            const startY = event.nativeEvent.offsetY

            dispatch(canvasSetCoordinates(startX, startY))
            dispatch(canvasSetIsDrawing(true))

            if (tool == CanvasTools.pensil && canvasContext.current) {
                canvasContext.current.beginPath()
                canvasContext.current.arc(startX, startY, 1, 0 * Math.PI, 2 * Math.PI)
                canvasContext.current.stroke()
            }
            if (tool == CanvasTools.line && canvasContext.current) {
                canvasContext.current.beginPath()
            }
        }


    }

    const handleMouseUp = (event: React.MouseEvent) => {
        if (isErasing) {
            dispatch(canvasSetIsErasing(false))
            dispatch(canvasSetIsDrawing(false))
            const img = new Image()
            img.src = canvasField
            canvasContext.current!.drawImage(img, 0, 0, canvasRef.current!.width, canvasRef.current!.height)
        } else {
            canvasContext.current!.closePath()
            dispatch(canvasSetIsDrawing(false))
            dispatch(canvasSetField(canvasRef.current!.toDataURL("image/png")))
        }
    }

    const handleMouseMove = (event: React.MouseEvent) => {

        if (tool === CanvasTools.eraser)
            dispatch(canvasSetIsErasing(true))

        if (isDrawing || isErasing) {
            switch (tool) {
                case CanvasTools.rectangle:
                    drawRect(event, startX, startY, canvasField, canvasContext, canvasRef)
                    break;
                case CanvasTools.pensil:
                    drawPensilLine(event, canvasContext)
                    break;
                case CanvasTools.circle:
                    drawCircle(event, startX, startY, canvasField, canvasContext, canvasRef)
                    break;
                case CanvasTools.pipette:
                    break;
                case CanvasTools.line:
                    drawLine(event, startX, startY, canvasField, canvasContext, canvasRef)
                    break;
                case CanvasTools.eraser:
                    erase(event, isDrawing, canvasField, canvasContext, canvasRef,
                        dispatch, canvasSetField)
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <Canvas
            canvasRef={canvasRef}
            onMouseDown={handleMouthDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        />
    )
}

export default CanvasContainer

