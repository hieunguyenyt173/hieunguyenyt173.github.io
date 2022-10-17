import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userApi from "../../api/userApi";

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            let res = await userApi.getUsers();
            console.log(res);

            setUsers(res);
        };

        fetchUsers();
    }, []);

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">List User</h1>

            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 &&
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Link to={`/users/${user.id}/posts`}>
                                        List Post
                                    </Link>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;