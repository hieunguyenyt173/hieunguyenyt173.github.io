import React, {useContext} from "react";
import { INCREASE_COUNT, REDUCE_COUNT, DELETE_PRODUCT } from "../../store/constants";
import Context from "../../context/Context";
import {formatMoney} from '../../utils/utils'
const Product = (props) => {
  const { dispatch } = useContext(Context)
  const { id, price, name, image, count, size} = props.product;
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
      const isConfirm = window.confirm(`Are you sure ?`);
      if(isConfirm){
        dispatch({
          type: DELETE_PRODUCT,
          payload: {
              id,
          }
        })
      }
      
    }
  return (
    
         <div className="product-item d-flex border mb-4">
         <div className="image">
           <img
             src={image}
             alt=""
           />
         </div>
         <div className="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
           <div>
             <div className="d-flex justify-content-between align-items-center">
               <h2 className="text-dark fs-5 fw-normal">
                 {name} ({size})
               </h2>
               <h2 className="text-danger fs-5 fw-normal">{formatMoney(price * count)}</h2>
             </div>
             <div className="text-black-50">
               <div className="d-inline-block me-3">
                 <button className="border py-2 px-3 d-inline-block fw-bold bg-light" onClick={() => handleReduce(id)}>
                   -
                 </button>
                 <span className="py-2 px-3 d-inline-block fw-bold">{count}</span>
                 <button className="border py-2 px-3 d-inline-block fw-bold bg-light" onClick={() => handleIncrease(id)}>
                   +
                 </button>
               </div>
             </div>
           </div>
           <div>
             <button className="text-primary border-0 bg-transparent fw-light" onClick={() => handleRemove(id)}>
               <span>
                 <i className="fa-solid fa-trash-can"></i>
               </span>
               Xóa
             </button>
           </div>
         </div>
       </div>
  );
};

export default Product;
