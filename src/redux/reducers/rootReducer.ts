import {combineReducers} from "redux";
import filerReducer from "./filerReducer";

export default combineReducers({
    filtersState: filerReducer,
});
