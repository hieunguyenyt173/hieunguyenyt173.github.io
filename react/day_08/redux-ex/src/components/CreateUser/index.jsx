import React, { useEffect, useState } from "react";
import provinceApi from "../../api/provinceApi";

function CreateUser() {
  const [province, setProvince] = useState([])
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const fetchProvince = async () => {
      let res = await provinceApi.getProvince();
      setProvince(res)
    }
    fetchProvince();
  }
  ,[])
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center text-uppercase mb-3">Tạo user</h2>

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
                  <option key={index}>{e.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="col-form-label">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                id="password"
                className="form-control"
              />
            </div>
          </div>
          <div className="text-center mt-3">
            <button className="btn btn-secondary btn-back me-2">
              Quay lại
            </button>
            <button className="btn btn-success" id="btn-save">
              Tạo User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
