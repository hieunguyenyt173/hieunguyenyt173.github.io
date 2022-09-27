import React, {useReducer} from "react";
import { INCREASE_COUNT, REDUCE_COUNT, DELETE_PRODUCT } from "../../store/constants";
import reducer, { initialState } from '../../store/reducer'

const Product = () => {
  const [products, dispatch] = useReducer(reducer, initialState);
    console.log(products);
    const handleIncrease = (id) => {
        dispatch({
            type: INCREASE_COUNT,
            payload: {
                id,
            }
        })
    }

    const handleReduce = (id) => {
      dispatch({
        type: REDUCE_COUNT,
        payload: {
            id,
        }
      })
    }

    const handleRemove = (id) => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: {
            id,
        }
      })
    }
  return (
    <>
    {products.length > 0 && products.map(product => (
         <div className="product-item d-flex border mb-4" key={product.id}>
         <div className="image">
           <img
             src={product.image}
             alt=""
           />
         </div>
         <div className="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
           <div>
             <div className="d-flex justify-content-between align-items-center">
               <h2 className="text-dark fs-5 fw-normal">
                 {product.name} ({product.size})
               </h2>
               <h2 className="text-danger fs-5 fw-normal">{product.price}</h2>
             </div>
             <div className="text-black-50">
               <div className="d-inline-block me-3">
                 <button className="border py-2 px-3 d-inline-block fw-bold bg-light" onClick={() => handleReduce(product.id)}>
                   -
                 </button>
                 <span className="py-2 px-3 d-inline-block fw-bold">{product.count}</span>
                 <button className="border py-2 px-3 d-inline-block fw-bold bg-light" onClick={() => handleIncrease(product.id)}>
                   +
                 </button>
               </div>
             </div>
           </div>
           <div>
             <button className="text-primary border-0 bg-transparent fw-light" onClick={() => handleRemove(product.id)}>
               <span>
                 <i className="fa-solid fa-trash-can"></i>
               </span>
               Xóa
             </button>
           </div>
         </div>
       </div>
       
    ))}
    {products.length ===0 && <p className="fst-italic message">Không có sản phẩm trong giỏ hàng</p>}
    </>
   
  );
};

export default Product;
