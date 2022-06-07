import {
    FETCH_CITIES_REQUEST,
    FETCH_CITIES_SUCCESS,
    FETCH_CITIES_FAILURE,
} from "./citiesTypes";
import axios from "axios";

export const fetchCitiesRequest = () => {
    return {
        type: FETCH_CITIES_REQUEST,
    };
};

export const fetchCitiesSuccess = (cities) => {
    return {
        type: FETCH_CITIES_SUCCESS,
        payload: cities,
    };
};

export const fetchCitiesFailure = (error) => {
    return {
        type: FETCH_CITIES_FAILURE,
        payload: error,
    };
};

export const fetchCities = (country) => {
    return (dispatch) => {
        dispatch(fetchCitiesRequest());
        axios
            .post(`https://countriesnow.space/api/v0.1/countries/cities`, {
                country: country,
            })
            .then((response) => {
                dispatch(fetchCitiesSuccess(response.data.data));
            })
            .catch((error) => {
                console.log("ERROR", error);
                const errorMsg = error.response.data.error;
                dispatch(fetchCitiesFailure(errorMsg));
            });
    };
};
