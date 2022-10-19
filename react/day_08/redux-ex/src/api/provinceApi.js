import axiosClient from "./axiosClient";


const provinceApi = {
    getProvince() {
        const url = "/api/";
        return axiosClient.get(url);
    }
}

export default provinceApi;