import { combineReducers } from "redux";
import cities from "./Cities/citiesReducers";
import coordinates from "./Coordinates/coordinatesReducers";
import weather from "./Weather/weatherReducers";
const rootReducer = combineReducers({
    cities,
    coordinates,
    weather,
});
export default rootReducer;
