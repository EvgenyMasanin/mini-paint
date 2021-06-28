import { TypedUseSelectorHook, useSelector } from "react-redux"
import { RootState } from "../Redux/reducer"

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector