import {
    FETCH_COORDINATES_REQUEST,
    FETCH_COORDINATES_SUCCESS,
    FETCH_COORDINATES_FAILURE,
} from "./coordinatesTypes";
import OpenWeatherMapService from "../../APIs/OpenWeatherMapService";

export const fetchCoordinatesRequest = () => {
    return {
        type: FETCH_COORDINATES_REQUEST,
    };
};

export const fetchCoordinatesSuccess = (coordinates) => {
    return {
        type: FETCH_COORDINATES_SUCCESS,
        payload: coordinates,
    };
};

export const fetchCoordinatesFailure = (error) => {
    return {
        type: FETCH_COORDINATES_FAILURE,
        payload: error,
    };
};

export const fetchCoordinates = (country_code, city) => {
    return (dispatch) => {
        dispatch(fetchCoordinatesRequest());
        OpenWeatherMapService.getCoordinates(country_code, city)
            .then((response) => {
                console.log(response);
                dispatch(
                    fetchCoordinatesSuccess([response[0].lat, response[0].lon])
                );
            })
            .catch((error) => dispatch(fetchCoordinatesFailure(error)));
    };
};
