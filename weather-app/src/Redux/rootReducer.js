import { combineReducers } from "redux";
import citiesReducer from "./Cities/citiesReducers";
import coordinatesReducer from "./Coordinates/coordinatesReducers";
import weatherReducer from "./Weather/weatherReducers";
const rootReducer = combineReducers({
    cities: citiesReducer,
    coordinates: coordinatesReducer,
    weather: weatherReducer,
});
export default rootReducer;
