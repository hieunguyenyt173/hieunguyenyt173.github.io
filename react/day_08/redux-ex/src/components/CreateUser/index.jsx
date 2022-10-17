import React from 'react'

function CreateUser() {
  return (
    <div className="container mt-5 mb-5">
        <h2 className="text-center text-uppercase mb-3">Tạo user</h2>

        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="bg-light p-4">
                    <div className="mb-3">
                        <label className="col-form-label">Name</label>
                        <input type="text" id="name" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Email</label>
                        <input type="text" id="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Phone</label>
                        <input type="text" id="phone" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Address</label>
                        <select className="form-select" id="address">
                            
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Password</label>
                        <input type="text" id="password" className="form-control" />
                    </div>
                </div>
                <div className="text-center mt-3">
                    <button className="btn btn-secondary btn-back me-2">Quay lại</button>
                    <button className="btn btn-success" id="btn-save">Tạo User</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateUser