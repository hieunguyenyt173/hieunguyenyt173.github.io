import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import postListApi from "../../api/postListApi";

function PostList() {
  const [postList, setPostList] = useState([]);

    useEffect(() => {
        const fetchPostList = async () => {
            let res = await postListApi.getPostList();
            console.log(res);

            setPostList(res);
        };

        fetchPostList();
    }, []);
  return (
    <>
     <div className="container my-5">
            <h1 className="text-center mb-4">List Posts</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {postList.length > 0 &&
                        postList.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.content}</td>
                                <td>
                                    <Link to={`/posts/${post.id}`}>
                                        Post Detail
                                    </Link>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default PostList