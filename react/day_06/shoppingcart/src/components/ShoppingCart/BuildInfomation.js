import React, {useContext} from "react";
import Context from "../../context/Context"
function BuildInfomation() {
  const { products } = useContext(Context);
  console.log(products)
  let subTotal = 0;
  products.forEach(product => {
    subTotal += product.price * product.count;
    return subTotal;
  });
  let vat = subTotal * 0.1;
  let total = subTotal + vat;

  return (
    <div className="bill">
      <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
        <span className="text-black-50">Tạm tính:</span>
        <span className="text-primary" id="sub-total-money">
          {subTotal} VND
        </span>
      </div>
      <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
        <span className="text-black-50">VAT (10%):</span>
        <span className="text-primary" id="vat-money">
          {vat} VND
        </span>
      </div>
      <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
        <span className="text-black-50">Thành tiền:</span>
        <span className="text-primary" id="total-money">
          {total} VND
        </span>
      </div>
    </div>
  );
}

export default BuildInfomation;
