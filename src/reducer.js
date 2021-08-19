import authersReducer from "./features/Authors/authorSlice"
import booksReducer from "./features/Books/bookSlice"
import {combineReducers} from "redux"
const rootReducer=combineReducers({authors:authersReducer,books:booksReducer})
 export default rootReducer;

