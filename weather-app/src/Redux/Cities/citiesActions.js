import {
    FETCH_CITIES_REQUEST,
    FETCH_CITIES_SUCCESS,
    FETCH_CITIES_FAILURE,
} from "./citiesTypes";
import CitiesService from "../../APIs/CitiesService";

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
        CitiesService.getCities(country)
            .then((response) => {
                dispatch(fetchCitiesSuccess(response.data));
            })
            .catch((error) => dispatch(fetchCitiesFailure(error)));
    };
};
