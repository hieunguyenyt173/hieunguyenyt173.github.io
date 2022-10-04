import React, { useContext } from "react";
import Context from "../../context/Context";
import {formatMoney} from '../../utils/utils'
function BuildInfomation() {
  const { products } = useContext(Context);
 const subTotal = products.reduce((total, product) => total + product.price * product.count, 0 )
  let vat = subTotal * 0.1;
  let total = subTotal + vat;

  return (
    <div className="col-md-4">
      <div className="bill">
        <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
          <span className="text-black-50">Tạm tính:</span>
          <span className="text-primary" id="sub-total-money">
            {formatMoney(subTotal)} 
          </span>
        </div>
        <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
          <span className="text-black-50">VAT (10%):</span>
          <span className="text-primary" id="vat-money">
            {formatMoney(vat)} 
          </span>
        </div>
        <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
          <span className="text-black-50">Thành tiền:</span>
          <span className="text-primary" id="total-money">
            {formatMoney(total)} 
          </span>
        </div>
      </div>
    </div>
  );
}

export default BuildInfomation;
