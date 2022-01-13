import { combineReducers } from "redux";
import technics from "./technics";

const createRootReducer = () => combineReducers({ technics });

export default createRootReducer;
