
import axiosClient from "./axiosClient";

// https://jsonplaceholder.typicode.com/users
const userApi = {
    getPost() {
        const url = "/posts";
        return axiosClient.get(url);
    },
    getPostById(id) {
        const url = `/posts/${id}`;
        return axiosClient.get(url);
    }
}

export default userApi