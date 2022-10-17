import axiosClient from "./axiosClient";

// https://jsonplaceholder.typicode.com/users
const userApi = {
    getPostList() {
        const url = "/posts";
        return axiosClient.get(url);
    },
    getPostListById(id) {
        const url = `/posts/${id}`;
        return axiosClient.get(url);
    }
}

export default userApi