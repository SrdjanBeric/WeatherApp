import {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
} from "./weatherTypes";

const initialState = {
    loading: false,
    weather: [],
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WEATHER_REQUEST:
            return {
                ...state,
                loading: true,
                weather: [],
                error: "",
            };
        case FETCH_WEATHER_SUCCESS:
            return {
                loading: false,
                weather: action.payload,
                error: "",
            };
        case FETCH_WEATHER_FAILURE:
            return {
                loading: false,
                weather: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
