import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../../redux/actions/UserAction";
function UserList() {
  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  const handleRemove = (id) => {
    dispatch(removeUser(id));
  };
  
  const handleSearch = (e) => {
    let newList = [...users]
        if(term) {
             newList = newList.filter((user) => (
                user.name.toLowerCase().includes(term.toLowerCase())   
            ))
          
        }
    
    return newList
  }
 
  const renderList = handleSearch()
  
  
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center text-uppercase">Danh sách user</h2>

      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="d-flex align-items-center mt-5 mb-4">
            <input
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              type="text"
              id="search"
              className="form-control w-50"
              placeholder="Tìm kiếm user"
            />
            {/* <button className="btn btn-danger ms-3" onClick={(e) => handleSearch(e)}>Search</button> */}
          </div>

          <div className="bg-light p-4">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                
                {renderList.map((user, index) => (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                    <td>
                      <Link
                        to={`/users/${user.id}`}
                        className="btn btn-success me-2"
                      >
                        Xem chi tiết
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleRemove(user.id)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="message d-none"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;
