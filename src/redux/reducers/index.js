import { combineReducers } from "redux";
import searchvalue_reducer from "./searchvalue";
import addincart_reducer from "./addincart";

export default combineReducers({
    sumInCart:addincart_reducer,
    searchValue: searchvalue_reducer
})