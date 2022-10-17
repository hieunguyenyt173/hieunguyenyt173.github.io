import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import userApi from "../../api/userApi";

function UserPost() {
    const params = useParams();
    const { userId } = params;

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPostsOfUser = async (id) => {
            let res = await userApi.getPostsOfUser(id);
            setPosts(res);
        };

        fetchPostsOfUser(userId);
    }, []);

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">List Post Of User {userId}</h1>

            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {posts.length > 0 &&
                        posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td>
                                    <Link to={`/posts/${post.id}`}>Detail</Link>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserPost;