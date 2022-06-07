import {
    FETCH_COORDINATES_REQUEST,
    FETCH_COORDINATES_SUCCESS,
    FETCH_COORDINATES_FAILURE,
} from "./coordinatesTypes";

const initialState = {
    loading: false,
    coordinates: [],
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COORDINATES_REQUEST:
            return {
                ...state,
                loading: true,
                coordinates: [],
                error: "",
            };
        case FETCH_COORDINATES_SUCCESS:
            return {
                loading: false,
                coordinates: action.payload,
                error: "",
            };
        case FETCH_COORDINATES_FAILURE:
            return {
                loading: false,
                coordinates: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
