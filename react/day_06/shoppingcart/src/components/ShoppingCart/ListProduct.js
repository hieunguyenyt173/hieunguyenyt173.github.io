import React, { useContext } from "react";
import Product from "./Product";
import Context from "../../context/Context";
const ListProduct = () => {
  const { products } = useContext(Context);

  return (
    <div className="col-md-8">
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
