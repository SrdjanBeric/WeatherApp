import {
    FETCH_CITIES_REQUEST,
    FETCH_CITIES_SUCCESS,
    FETCH_CITIES_FAILURE,
} from "./citiesTypes";

const initialState = {
    loading: false,
    cities: [],
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CITIES_REQUEST:
            return {
                ...state,
                loading: true,
                cities: [],
                error: "",
            };
        case FETCH_CITIES_SUCCESS:
            return {
                loading: false,
                cities: action.payload,
                error: "",
            };
        case FETCH_CITIES_FAILURE:
            return {
                loading: false,
                cities: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
