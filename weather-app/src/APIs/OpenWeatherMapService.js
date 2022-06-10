import request from "./BaseService";
import axios from "axios";

const apiKey = "bb0f5e9e197d66854bd4a147d219b6d0";

const client = axios.create({
    baseURL: `https://api.openweathermap.org/`,
});

const getWeather = (lat, lon) => {
    return request(client, {
        method: "GET",
        url: `/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,alerts,current,minutely&appid=${apiKey}&units=metric`,
    });
};

const getCoordinates = (country_code, city) => {
    return request(client, {
        method: "GET",
        url: `/geo/1.0/direct?q=${city},${country_code}&limit=1&appid=${apiKey}`,
    });
};

const OpenWeatherMapService = {
    getWeather,
    getCoordinates,
};

export default OpenWeatherMapService;
