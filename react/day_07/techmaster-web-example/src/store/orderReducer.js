import { ADD_ORDER } from "./constants";

// 1. Tạo state
export const initOrder = JSON.parse(localStorage.getItem("orders")) || [];

// 2. Tạo reducer
const orderReducer = (state, action) => {

    let newState = [];
    switch (action.type) {
        
        case ADD_ORDER: {
            newState = [...state, action.payload]
            break;
        }
        default: {
            newState = [...state];
            break;
        }
    }

    localStorage.setItem("orders", JSON.stringify(newState));
    return newState;
};

export default orderReducer;