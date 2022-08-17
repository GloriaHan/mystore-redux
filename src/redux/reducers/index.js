import { combineReducers } from "redux";
import addincart_reducer from "./addincart";

export default combineReducers({
    sumInCart:addincart_reducer
})