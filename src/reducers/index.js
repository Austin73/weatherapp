import { combineReducers } from "redux";
import changeCityReducer from "./changeCityReducer";

import CurrentDataReducer from "./CurrentDataReducer";
import HourlyDataReducer from "./HourlyDataReducer";
import WeeklyDataReducer from "./WeeklyDataReducer";
const allReducers=combineReducers({
    currentData:CurrentDataReducer,
    hourlyData:HourlyDataReducer,
    weeklyData:WeeklyDataReducer,
    changecity:changeCityReducer
})
export default allReducers