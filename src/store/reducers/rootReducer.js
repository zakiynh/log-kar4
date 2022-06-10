import { combineReducers } from "redux";
import dataReducer from "./reducer";

const rootReducer = combineReducers({
    movies: dataReducer,
});

export default rootReducer;
