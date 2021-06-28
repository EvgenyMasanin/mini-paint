import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../Hooks/reduxHooks'
import { canvasChangeTool, canvasSetCoordinates, canvasSetField, canvasSetIsDrawing } from '../../Redux/Canvas/canvasActions'
import { CanvasTool, CanvasTools } from '../Types/Types'
import Canvas from './Canvas'

const CanvasContainer: React.FC = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null)
    let canvasContext = useRef<CanvasRenderingContext2D | null>(null)
    const dispatch = useDispatch()
    const { startX, startY, canvasField, isDrawing, tool } = useTypedSelector(state => ({
        startX: state.canvas.startX,
        startY: state.canvas.startY,
        canvasField: state.canvas.canvasField,
        isDrawing: state.canvas.isDrawing,
        tool: state.canvas.tool,
    }))

    // const [canvasState, setCanvasState] = useState({
    //     startX: 0,
    //     startY: 0,
    //     isDrawing: false,
    //     canvasField: '',
    //     tool: ''
    // })

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

    // const changeTool = (tool: CanvasTool) => {
    //     dispatch(canvasChangeTool(tool))
    //     // setCanvasState((prev) => ({
    //     //     ...prev,
    //     //     tool: tool
    //     // }))
    // }

    const handleMouthDown = (event: React.MouseEvent) => {
        const startX = event.nativeEvent.offsetX
        const startY = event.nativeEvent.offsetY

        dispatch(canvasSetCoordinates(startX, startY))
        dispatch(canvasSetIsDrawing(true))

        if (tool == CanvasTools.pensil && canvasContext.current) {
            canvasContext.current.beginPath()
            canvasContext.current.arc(startX, startY, 1, 0 * Math.PI, 2 * Math.PI)
            canvasContext.current.stroke()
        }



        // context.current.beginPath()
        // context.current.moveTo(startX, startY)
        // context.current.lineTo(startX+1, startY+1)
        // context.current.stroke()
        // context.current.beginPath()
        // context.current.moveTo(startX, startY)

    }

    const handleMouseUp = (event: React.MouseEvent) => {
        canvasContext.current!.closePath()
        dispatch(canvasSetIsDrawing(false))
        dispatch(canvasSetField(canvasRef.current!.toDataURL("image/png")))
        // setCanvasState(prevState => ({
        //     ...prevState,
        //     canvasField: canvasRef.current!.toDataURL("image/png"),
        //     isDrawing: false
        // }))


        // setIsDrawing(false)
        // setCanvasField(canvasRef.current.toDataURL("image/png"))
        // console.log(startX, startY, endX, endY);
        // endX = event.clientX - event.target.offsetLeft - startX
        // endY = event.clientY - event.target.offsetTop - startY
        // context.fillStyle = 'black'
        // context.fillRect(startX, startY, endX, endY)
        // console.log(startX, startY, endX, endY);

    }

    const handleMouseMove = (event: React.MouseEvent) => {
        if (isDrawing && tool == CanvasTools.rectangle) {
            console.log(1234);

            const endX = event.nativeEvent.offsetX - startX
            const endY = event.nativeEvent.offsetY - startY

            const img = new Image();
            img.src = canvasField
            canvasContext.current!.drawImage(img, 0, 0, canvasRef.current!.width, canvasRef.current!.height);

            canvasContext.current!.beginPath();
            canvasContext.current!.strokeStyle = "green";
            canvasContext.current!.rect(startX, startY, endX, endY);
            canvasContext.current!.stroke();

            // canvasContext.current!.beginPath()
            // canvasContext.current!.arc(startX, startY, endX, 0 * Math.PI, 2 * Math.PI)
            // canvasContext.current!.stroke()

        } else if (isDrawing && tool == CanvasTools.pensil) {
            const endX = event.nativeEvent.offsetX
            const endY = event.nativeEvent.offsetY
            canvasContext.current!.lineTo(endX, endY)
            // context.current.lineTo(endX+1, endY+1)
            canvasContext.current!.stroke()

        }
        // ctx.beginPath();
        // ctx.lineWidth = "5";
        // ctx.strokeStyle = "green";
        // ctx.moveTo(0, 75);
        // ctx.lineTo(250, 75);
        // ctx.stroke(); // Нарисуем его
        // }
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
