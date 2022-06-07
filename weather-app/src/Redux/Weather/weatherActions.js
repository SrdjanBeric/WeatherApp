import {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
} from "./weatherTypes";
import axios from "axios";

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
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,alerts,current,minutely&appid=bb0f5e9e197d66854bd4a147d219b6d0&units=metric`
            )
            .then((response) => {
                dispatch(fetchWeatherSuccess(response.data.daily));
                console.log(response.data);
            })
            .catch((error) => {
                console.log("ERROR", error);
                const errorMsg = error;
                dispatch(fetchWeatherFailure(errorMsg));
            });
    };
};
