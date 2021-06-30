import { Dispatch } from "redux"
import { CanvasAction } from "../../Redux/Canvas/canvasActions"

export const drawPensilLine = (
    event: React.MouseEvent<Element, MouseEvent>,
    canvasContext: React.MutableRefObject<CanvasRenderingContext2D | null>
) => {

    const endX = event.nativeEvent.offsetX
    const endY = event.nativeEvent.offsetY
    canvasContext.current!.lineTo(endX, endY)
    canvasContext.current!.stroke()
}

export const drawRect = (
    event: React.MouseEvent<Element, MouseEvent>,
    startX: number,
    startY: number,
    canvasField: string,
    canvasContext: React.MutableRefObject<CanvasRenderingContext2D | null>,
    canvasRef: React.RefObject<HTMLCanvasElement>
) => {

    const endX = event.nativeEvent.offsetX - startX
    const endY = event.nativeEvent.offsetY - startY

    const img = new Image()
    img.src = canvasField
    canvasContext.current!.drawImage(img, 0, 0, canvasRef.current!.width, canvasRef.current!.height)

    canvasContext.current!.beginPath()
    canvasContext.current!.rect(startX, startY, endX, endY)
    canvasContext.current!.stroke()
}

export const drawCircle = (
    event: React.MouseEvent<Element, MouseEvent>,
    startX: number,
    startY: number,
    canvasField: string,
    canvasContext: React.MutableRefObject<CanvasRenderingContext2D | null>,
    canvasRef: React.RefObject<HTMLCanvasElement>
) => {

    const endX = Math.abs(event.nativeEvent.offsetX - startX)
    const endY = Math.abs(event.nativeEvent.offsetY - startY)

    const img = new Image()
    img.src = canvasField
    canvasContext.current!.drawImage(img, 0, 0, canvasRef.current!.width, canvasRef.current!.height)

    canvasContext.current!.beginPath();
    canvasContext.current!.save();
    canvasContext.current!.translate(startX + endX / 2, startY + endY / 2);
    canvasContext.current!.scale(1, endY / endX);
    canvasContext.current!.arc(0, 0, endX / 2, 0, Math.PI * 2);
    canvasContext.current!.restore();
    canvasContext.current!.stroke();
    canvasContext.current!.closePath();
}

export const drawLine = (
    event: React.MouseEvent<Element, MouseEvent>,
    startX: number,
    startY: number,
    canvasField: string,
    canvasContext: React.MutableRefObject<CanvasRenderingContext2D | null>,
    canvasRef: React.RefObject<HTMLCanvasElement>
) => {
    const endX = event.nativeEvent.offsetX
    const endY = event.nativeEvent.offsetY

    const img = new Image()
    img.src = canvasField
    canvasContext.current!.drawImage(img, 0, 0, canvasRef.current!.width, canvasRef.current!.height)
    canvasContext.current!.beginPath();
    canvasContext.current!.lineTo(startX, startY)
    canvasContext.current!.lineTo(endX, endY)
    canvasContext.current!.stroke();
    canvasContext.current!.closePath();
}

export const erase = (
    event: React.MouseEvent<Element, MouseEvent>,
    isDrawing: boolean,
    canvasField: string,
    canvasContext: React.MutableRefObject<CanvasRenderingContext2D | null>,
    canvasRef: React.RefObject<HTMLCanvasElement>,
    dispatch: Dispatch,
    canvasSetField: (field: string) => CanvasAction
) => {
    const endX = event.nativeEvent.offsetX
    const endY = event.nativeEvent.offsetY
    const img = new Image()
    img.src = canvasField
    canvasContext.current!.drawImage(img, 0, 0, canvasRef.current!.width, canvasRef.current!.height)
    if (isDrawing) {

        canvasContext.current!.fillStyle = "white"
        canvasContext.current!.fillRect(endX - 15, endY - 15, 30, 30)
        const currentField = canvasRef.current!.toDataURL("image/png")
        dispatch(canvasSetField(currentField))
        img.src = currentField
        canvasContext.current!.drawImage(img, 0, 0, canvasRef.current!.width, canvasRef.current!.height)
    }

    canvasContext.current!.beginPath()
    // canvasContext.current!.strokeStyle = "black"
    canvasContext.current!.rect(endX - 15, endY - 15, 30, 30)
    canvasContext.current!.fillStyle = "white"
    canvasContext.current!.fill()
    canvasContext.current!.stroke()
}