import request from "./BaseService";
import axios from "axios";

const client = axios.create({
    baseURL: `https://countriesnow.space/api/v0.1/`,
});

const post = (country) => {
    return request(client, {
        method: "POST",
        url: "/countries/cities",
        data: {
            country,
        },
    });
};

const CitiesService = {
    post,
};

export default CitiesService;
