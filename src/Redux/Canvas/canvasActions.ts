import { CanvasTools } from "../../Components/Types/Types";

export interface CanvasCoordinates {
    startX: number,
    startY: number
}

export enum CanvasActions {
    CHANGE_TOOL = 'CHANGE_TOOL',
    SET_COORDINATES = 'SET_COORDINATES',
    SET_IS_DRAWING = 'SET_IS_DRAWING',
    SET_IS_READY_TO_DRAWING = 'SET_IS_READY_TO_DRAWING',
    SET_CANVAS_FIELD = 'SET_CANVAS_FIELD',
    SET_IS_ERASING = 'SET_IS_ERASING',
    SET_COLOR = 'SET_COLOR'
}

export interface CanvasChangeToolAction {
    type: CanvasActions.CHANGE_TOOL,
    payload: CanvasTools
}

export interface CanvasSetCoordinatesAction {
    type: CanvasActions.SET_COORDINATES,
    payload: CanvasCoordinates
}

export interface CanvasSetIsDrawingAction {
    type: CanvasActions.SET_IS_DRAWING,
    payload: boolean
}

export interface CanvasSetIsErasingAction {
    type: CanvasActions.SET_IS_ERASING,
    payload: boolean
}

export interface CanvasSetFieldAction {
    type: CanvasActions.SET_CANVAS_FIELD,
    payload: string
}

export interface CanvasSetColor {
    type: CanvasActions.SET_COLOR,
    payload: string
}

export type CanvasAction = CanvasChangeToolAction |
    CanvasSetCoordinatesAction |
    CanvasSetIsDrawingAction |
    CanvasSetFieldAction |
    CanvasSetIsErasingAction |
    CanvasSetColor

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