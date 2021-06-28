import { CanvasTools } from "../../Components/Types/Types";
import { CanvasAction, CanvasActions } from "./canvasActions";

const initialState = {
    startX: 0,
    startY: 0,
    isReadyToDrawing: false,
    isDrawing: false,
    canvasField: '',
    tool: CanvasTools.pensil
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
        case CanvasActions.SET_IS_READY_TO_DRAWING:
            return {
                ...state,
                isReadyToDrawing: action.payload
            }
        case CanvasActions.SET_COORDINATES: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
}