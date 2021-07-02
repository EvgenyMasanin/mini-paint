import { CanvasTools } from "../../Components/Types/Types";
import { CanvasAction, CanvasActions } from "./canvasTypes";

const initialState = {
    startX: 0,
    startY: 0,
    isReadyToDrawing: false,
    isDrawing: false,
    isErasing: false,
    canvasField: '',
    tool: CanvasTools.pensil,
    color: '#000000',
    lineWidth: 1
}

type CanvasStateType = typeof initialState

export const canvasReducer = (state = initialState, action: CanvasAction): CanvasStateType => {
    switch (action.type) {
        case CanvasActions.CHANGE_TOOL:
            return {
                ...state,
                tool: action.payload
            }
        case CanvasActions.SET_CANVAS_FIELD:
            return {
                ...state,
                canvasField: action.payload
            }
        case CanvasActions.SET_IS_DRAWING:
            return {
                ...state,
                isDrawing: action.payload
            }
        case CanvasActions.SET_IS_ERASING:
            return {
                ...state,
                isErasing: action.payload
            }
        case CanvasActions.SET_COORDINATES:
            return {
                ...state,
                ...action.payload
            }
        case CanvasActions.SET_COLOR:
            return {
                ...state,
                color: action.payload
            }
        case CanvasActions.SET_LINE_WIDTH:
            return {
                ...state,
                lineWidth: action.payload
            }
        default:
            return state;
    }
}