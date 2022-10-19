import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import provinceApi from "../../api/provinceApi";

function DetailUser() {
  
  const [password, setPassword] = useState("");
  const { userId } = useParams();
  const { users } = useSelector((state) => state);
  const user = users.find((user) => user.id === +userId);
  const [province, setProvince] = useState([])
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  useEffect(() => {
    const fetchProvince = async () => {
      let res = await provinceApi.getProvince();
      setProvince(res)
    }
    fetchProvince();
  }
  ,[])
  console.log(user.name);
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center text-uppercase mb-3">Thông tin user</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="bg-light p-4">
            <div className="mb-3">
              <label className="col-form-label">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="email"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Phone</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                id="phone"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Address</label>
              <select className="form-select" id="address">
                {province.map((e, index) => (
                  <option 
                  value={address}
                  onChange = {(e) => setAddress(e.target.value)}
                  selected={e.name === user.address}
                  key={index}>
                    {e.name}
                    </option>
                    
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="col-form-label">Password</label>
              <div className="">
                <button
                  type="button"
                  className="btn btn-primary me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-change-password"
                >
                  Đổi mật khẩu
                </button>
                <button className="btn btn-warning" id="btn-forgot-password">
                  Quên mật khẩu
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-3">
            <button className="btn btn-secondary btn-back">Quay lại</button>
            <button className="btn btn-success" id="btn-save">
              Cập nhật
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modal-change-password"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Đổi mật khẩu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="col-form-label">Mật khẩu cũ</label>
                <input type="text" id="old-password" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Mật khẩu mới</label>
                <input type="text" id="new-password" className="form-control" />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button
                type="button"
                className="btn btn-primary"
                id="btn-change-password"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailUser;
