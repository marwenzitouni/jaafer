import { combineReducers } from "redux";

import {userReducer} from "./userReducer"
import {foyerReducer} from "./foyerReducers"
export const reducers = combineReducers({ userReducer ,foyerReducer});