import Context from "context/Context";
import React from "react";
import { useContext } from "react";
import { formatMoney } from "utils/utils";

function OrderHistory() {
  const { orders, auth } = useContext(Context);
  let order = orders.filter((order) => order.userId === auth.id);
  return (
    <section className="py-5">
      <div className="container">
        <h1 className="fs-4 mb-5">Lịch sử đơn hàng</h1>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Danh sách item</th>
              <th>Ngày đăng ký</th>
              <th>Hình thức thanh toán</th>
              <th>Tổng tiền đơn hàng (đã bao gồm VAT - 10%)</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <ul>
                    {item.items.map((product) => {
                      return (
                        <li key={product.id}>
                          {product.title} ({formatMoney(product.price)} - 1)
                        </li>
                      );
                    })}
                  </ul>
                </td>
                <td>{item.createdAt}</td>
                <td>{item.paymentMethod}</td>
                <td>{formatMoney(item.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default OrderHistory;
