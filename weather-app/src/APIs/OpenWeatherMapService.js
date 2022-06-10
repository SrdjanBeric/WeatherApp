import BaseService from "./BaseService";

const apiKey = "bb0f5e9e197d66854bd4a147d219b6d0";

const baseURL = `https://api.openweathermap.org`;

const getWeather = (lat, lon) => {
    const url = `/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,alerts,current,minutely&appid=${apiKey}&units=metric`;
    return BaseService.get(baseURL + url);
};

const getCoordinates = (country_code, city) => {
    const url = `/geo/1.0/direct?q=${city},${country_code}&limit=1&appid=${apiKey}`;
    return BaseService.get(baseURL + url);
};

const OpenWeatherMapService = {
    getWeather,
    getCoordinates,
};

export default OpenWeatherMapService;
