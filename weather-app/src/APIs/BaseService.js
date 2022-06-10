import axios from "axios";

class BaseService {
    constructor() {
        let service = axios.create({});
        service.interceptors.response.use(this.handleSuccess, this.handleError);
        this.service = service;
    }

    handleSuccess(response) {
        return response;
    }

    handleError = (error) => {
        switch (error.response.status) {
            case 401:
                this.redirectTo(
                    document,
                    "https://www.elegantthemes.com/blog/wp-content/uploads/2019/12/401-error-wordpress-featured-image.jpg"
                );
                break;
            case 404:
                this.redirectTo(
                    document,
                    "https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"
                );
                break;
            default:
                this.redirectTo(
                    document,
                    "https://i.pinimg.com/originals/a0/ff/48/a0ff48623d31b7a2371552e315671e5f.png"
                );
                break;
        }
        return Promise.reject(error);
    };

    redirectTo = (document, path) => {
        document.location = path;
    };

    get(path) {
        return this.service.get(path).then((response) => response.data);
    }

    post(path, payload) {
        return this.service
            .request({
                method: "POST",
                url: path,
                responseType: "json",
                data: payload,
            })
            .then((response) => response.data);
    }
}

export default new BaseService();
