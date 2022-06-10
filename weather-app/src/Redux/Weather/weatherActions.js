import {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
} from "./weatherTypes";
import OpenWeatherMapService from "../../APIs/OpenWeatherMapService";

export const fetchWeatherRequest = () => {
    return {
        type: FETCH_WEATHER_REQUEST,
    };
};

export const fetchWeatherSuccess = (weather) => {
    return {
        type: FETCH_WEATHER_SUCCESS,
        payload: weather,
    };
};

export const fetchWeatherFailure = (error) => {
    return {
        type: FETCH_WEATHER_FAILURE,
        payload: error,
    };
};

export const fetchWeather = (lat, lon) => {
    return (dispatch) => {
        dispatch(fetchWeatherRequest());
        OpenWeatherMapService.getWeather(lat, lon)
            .then((response) => {
                dispatch(fetchWeatherSuccess(response.daily));
            })
            .catch((error) => dispatch(fetchWeatherFailure(error)));
    };
};
