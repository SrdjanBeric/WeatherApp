import BaseService from "./BaseService";

const baseURL = `https://countriesnow.space/api/v0.1`;

const getCities = (country) => {
    const url = "/countries/cities";
    const data = {
        country,
    };
    return BaseService.post(baseURL + url, data);
};

const CitiesService = {
    getCities,
};

export default CitiesService;
