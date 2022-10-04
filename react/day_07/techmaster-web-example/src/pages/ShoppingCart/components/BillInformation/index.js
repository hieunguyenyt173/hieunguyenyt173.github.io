import React, { useContext } from "react";
import Context from "context/Context";
import { formatMoney } from "utils/utils";
import { Link } from "react-router-dom";

function BillInformation() {
    const { products } = useContext(Context);

    const subTotal = products.reduce((total, product) => total + product.count * product.price, 0);
    const vat = subTotal * 0.1;
    const total = subTotal + vat;

    return (
        <>
            {products.length > 0 && (
                <div className="col-md-4">
                    <div className="bill">
                        <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                            <span className="text-black-50">Tạm tính:</span>
                            <span className="text-primary" id="sub-total-money">
                                {formatMoney(subTotal)}
                            </span>
                        </div>
                        <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center discount-box">
                            <span className="text-black-50">VAT (10%):</span>
                            <span className="text-primary" id="discount-money">
                                {formatMoney(vat)}
                            </span>
                        </div>
                        <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                            <span className="text-black-50">Thành tiền:</span>
                            <span className="text-primary" id="total-money">
                                {formatMoney(total)}
                            </span>
                            
                        </div>
                        <Link to="/thanh-toan" className="btn btn-primary mb-3">Tiến hành thanh toán</Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default BillInformation;