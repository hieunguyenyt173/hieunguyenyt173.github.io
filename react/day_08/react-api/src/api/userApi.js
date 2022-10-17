// https://jsonplaceholder.typicode.com

import axiosClient from "./axiosClient";

// https://jsonplaceholder.typicode.com/users
const userApi = {
    getUsers() {
        const url = "/users";
        return axiosClient.get(url);
    },
    getPostsOfUser(userId) {
        const url = `/users/${userId}/posts`;
        return axiosClient.get(url);
    }
}

export default userApi