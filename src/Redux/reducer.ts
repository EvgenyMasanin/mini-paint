import { combineReducers } from "redux";
import { userDataReducer } from "./UserData/userDataReducer"
import { reducer as formReduser } from "redux-form";
import { canvasReducer } from "./Canvas/canvasReducer";

export const rootReducer =  combineReducers({
    userData: userDataReducer,
    canvas: canvasReducer,
    form: formReduser
}) 

export type RootState = ReturnType<typeof rootReducer>