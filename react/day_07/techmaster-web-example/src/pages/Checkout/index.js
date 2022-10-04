import Context from "context/Context";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { addOrder, resetProduct } from "store/actions";
import authReducer from "store/authReducer";
import { formatMoney } from "utils/utils";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";

function Checkout() {
  const date = new Date();
  const payments = [
    {
      value: "transfer",
      name: "Chuyển khoản",
    },
    {
      value: "direct",
      name: "Thanh toán trực tiếp",
    },
  ];
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [checked, setChecked] = useState("transfer");
  const { auth, products, dispatchOrder, dispatchCart } = useContext(Context);
  const subtotal = products.reduce(
    (total, product) => total + product.price,
    0
  );
  const vat = 0.1 * subtotal;
  const total = subtotal + vat;
  const navigate = useNavigate();
  const handleSubmit = () => {
    
    const order = {
      id: Math.floor(Math.random() * 100000),
      userId: auth.id,
      items: products,
      createdAt: date.toLocaleDateString(),
      paymentMethod: checked,
      total: formatMoney(total),
    };
    if (!auth.id) {
      let newOrder = {...order, userId: ""}
      dispatchOrder(addOrder(newOrder));
      dispatchCart(resetProduct());
      alert("Đăng kí thành công");
      return;
    }
    dispatchOrder(addOrder(order));
    dispatchCart(resetProduct());
    alert("Đăng kí thành công");
    navigate("/khoa-hoc");
  };
  return (
    <div className="shopping-cart-container my-5">
      <div className="container">
        <div className="mb-4">
          <nav
            style={{ "--bs-breadcrumb-divider": ">" }}
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/gio-hang">Giỏ hàng</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Thanh toán
              </li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="p-4 shadow-sm">
              <h2 className="fs-5 fw-normal mb-3">1. Thông tin tài khoản</h2>
              {!auth.id && (
                <div className="account-info d-flex mb-4">
                  <input
                    type="text"
                    placeholder="Nhập tên"
                    className="form-control flex-grow-1"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Nhập email"
                    className="form-control flex-grow-1 mx-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Nhập số điện thoại"
                    className="form-control flex-grow-1"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              )}
              {auth.id && (
                <div className="account-info d-flex mb-4">
                  <input
                    type="text"
                    placeholder="Nhập tên"
                    className="form-control flex-grow-1"
                    defaultValue={auth.name}
                  />
                  <input
                    type="text"
                    placeholder="Nhập email"
                    className="form-control flex-grow-1 mx-2"
                    defaultValue={auth.email}
                  />
                  <input
                    type="text"
                    placeholder="Nhập số điện thoại"
                    className="form-control flex-grow-1"
                    defaultValue={auth.phone}
                  />
                </div>
              )}

              <h2 className="fs-5 fw-normal mb-3 mt-5">
                2. Phương thức thanh toán
              </h2>
              <div className="payment methods">
                {payments.map((payment) => (
                  <div
                    className="topic-item input-group d-flex align-items-center mb-1"
                    key={payment.value}
                  >
                    <input
                      type="radio"
                      value={payment.value}
                      id={payment.value}
                      onChange={(e) => setChecked(e.target.value)}
                      checked={checked === payment.value}
                    />
                    <label htmlFor={payment.value} className="ms-2">
                      {payment.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 shadow-sm">
              <div className="order-detail">
                <h2 className="fs-5 fw-normal mb-4">Đơn hàng</h2>

                <div className="order-items">
                  {products.map((product) => (
                    <div
                      className="order-item d-flex justify-content-between align-items-center"
                      key={product.id}
                    >
                      <p className="text-black-50">{product.title}</p>
                      <p className="fw-bold">
                        {formatMoney(product.price)} x 1
                      </p>
                    </div>
                  ))}
                </div>

                <div className="order-money d-flex justify-content-between align-items-center border-top pt-4">
                  <p className="text-black-50 fw-bold">Thành tiền</p>
                  <p className="fw-bold">{formatMoney(subtotal)}</p>
                </div>

                <div className="order-money d-flex justify-content-between align-items-center border-top pt-4">
                  <p className="text-black-50 fw-bold">VAT</p>
                  <p className="fw-bold">{formatMoney(vat)}</p>
                </div>

                <div className="order-money d-flex justify-content-between align-items-center border-top pt-4 pb-4">
                  <p className="text-black-50 fw-bold">Tổng cộng</p>
                  <p className="fw-bold">{formatMoney(total)}</p>
                </div>

                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-primary"
                    id="btn-submit"
                    onClick={handleSubmit}
                  >
                    Gửi đăng ký
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
