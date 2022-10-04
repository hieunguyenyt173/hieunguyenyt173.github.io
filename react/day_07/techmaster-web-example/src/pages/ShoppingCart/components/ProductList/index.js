import React, { useContext } from 'react'
import ProductItem from '../ProductItem'
import Context from "context/Context";

function ProductList() {
    const { products } = useContext(Context);

    return (
        <div className="col-md-8">
            <div className="product-list">
                {products.length === 0 && <p>Không có sản phẩm nào trong giỏ hàng</p>}
                {products.length > 0 && products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductList