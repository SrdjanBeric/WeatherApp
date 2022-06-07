import {
    FETCH_COORDINATES_REQUEST,
    FETCH_COORDINATES_SUCCESS,
    FETCH_COORDINATES_FAILURE,
} from "./coordinatesTypes";
import axios from "axios";

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
        axios
            .get(
                `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country_code}&limit=1&appid=bb0f5e9e197d66854bd4a147d219b6d0`
            )
            .then((response) => {
                dispatch(
                    fetchCoordinatesSuccess([
                        response.data[0].lat,
                        response.data[0].lon,
                    ])
                );
            })
            .catch((error) => {
                console.log("ERROR", error);
                const errorMsg = error;
                dispatch(fetchCoordinatesFailure(errorMsg));
            });
    };
};
