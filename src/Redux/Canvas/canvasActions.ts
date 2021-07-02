import { CanvasTools } from "../../Components/Types/Types";
import { CanvasAction, CanvasActions } from "./canvasTypes";

export const canvasSetLineWidth = (lineWeight: number): CanvasAction => {
    return {
        type: CanvasActions.SET_LINE_WIDTH,
        payload: lineWeight
    }
}

export const canvasChangeTool = (tool: CanvasTools): CanvasAction => ({
    type: CanvasActions.CHANGE_TOOL,
    payload: tool
})

export const canvasSetCoordinates = (startX: number, startY: number): CanvasAction => ({
    type: CanvasActions.SET_COORDINATES,
    payload: {
        startX,
        startY
    }
})

export const canvasSetIsDrawing = (isDrawing: boolean): CanvasAction => ({
    type: CanvasActions.SET_IS_DRAWING,
    payload: isDrawing
})

export const canvasSetIsErasing = (isErasing: boolean): CanvasAction => ({
    type: CanvasActions.SET_IS_ERASING,
    payload: isErasing
})

export const canvasSetField = (field: string): CanvasAction => ({
    type: CanvasActions.SET_CANVAS_FIELD,
    payload: field
})

export const canvasSetColor = (color: string): CanvasAction => ({
    type: CanvasActions.SET_COLOR,
    payload: color
})