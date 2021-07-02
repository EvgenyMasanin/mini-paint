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
    SET_COLOR = 'SET_COLOR',
    SET_LINE_WIDTH = 'SET_LINE_WIDTH',
}

export interface CanvasChangeToolAction {
    type: CanvasActions.CHANGE_TOOL,
    payload: CanvasTools
}

export interface CanvasSetLineWidth {
    type: CanvasActions.SET_LINE_WIDTH,
    payload: number
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
    CanvasSetColor |
    CanvasSetLineWidth