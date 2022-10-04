import Context from "context/Context";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { syncAuth, updateProfile } from "store/actions";

function SecurityAccount() {
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const { auth, dispatchUser, dispatchAuth } = useContext(Context);
    const handleChangePassword = () => {
        if(password !== auth.password) {
            alert("Mật khẩu không chính Xác")
            return;
        }
        if(password === newPassword) {
            alert("Mật khẩu mới và mật khẩu cũ không được trùng nhau")
            return;
        }
        if(newPassword !== confirmPassword) {
            alert("Mật khẩu mới và xác nhận không trùng nhau")
            return;
        }
        let userUpdate = {
            id: auth.id,
            password: newPassword,
        }
        dispatchUser(updateProfile(userUpdate))
        dispatchAuth(syncAuth(userUpdate))
        alert("Cập nhật mật khẩu thành công")
        setPassword('')
        setNewPassword('')
        setConfirmPassword('')
    }
    return (
        <section class="py-5">
            <div class="container">
                <h1 class="fs-4 mb-5">Bảo mật tài khoản</h1>
                <div class="row">
                    <div class="col-md-6">
                        <div class="bg-light p-4">
                            <div class="mb-3">
                                <label class="col-form-label">
                                    Mật khẩu cũ
                                </label>
                                <input
                                    type="password"
                                    class="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div class="mb-3">
                                <label class="col-form-label">
                                    Mật khẩu mới
                                </label>
                                <input
                                    type="password"
                                    class="form-control"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>
                            <div class="mb-3">
                                <label class="col-form-label">
                                    Xác nhận lại mật khẩu mới
                                </label>
                                <input
                                    type="password"
                                    class="form-control"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div class="text-center mt-3">
                            <button class="btn btn-primary" id="btn-save" onClick={handleChangePassword}>
                                Cập nhật mật khẩu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SecurityAccount;