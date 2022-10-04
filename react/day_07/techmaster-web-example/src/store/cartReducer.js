import {
    ADD_COUNT,
    SUBTRACT_COUNT,
    DELETE_PRODUCT,
    ADD_PRODUCT,
    RESET_PRODUCT,
} from "./constants";

// 1. Tạo state
export const initCart = JSON.parse(localStorage.getItem("cart")) || [];

// 2. Tạo reducer
const cartReducer = (state, action) => {

    let newState = [];
    switch (action.type) {
        case ADD_COUNT: {
            const { id } = action.payload;
            newState = state.map((product) => {
                if (product.id === id) {
                    return { ...product, count: product.count + 1 };
                }
                return product;
            });
            break;
        }
        case SUBTRACT_COUNT: {
            const { id } = action.payload;
            newState = state.map((product) => {
                if (product.id === id) {
                    return { ...product, count: product.count - 1 };
                }
                return product;
            });
            break;
        }
        case DELETE_PRODUCT: {
            const { id } = action.payload;
            newState = state.filter((product) => product.id !== id);
            break;
        }
        case ADD_PRODUCT: {
            newState = [...state, action.payload];
            break;
        }
        case RESET_PRODUCT: {
            newState = [];
            break;
        }
        default: {
            newState = [...state];
            break;
        }
    }

    localStorage.setItem("cart", JSON.stringify(newState));
    return newState;
};

export default cartReducer;