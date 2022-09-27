import {INCREASE_COUNT, REDUCE_COUNT, DELETE_PRODUCT} from "./constants";


export const initialState = [
    {
        id: 1,
        name: "1 Lorem ipsum dolor sit amet",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        rating: 4.5,
        price: 400000,
        count: 1,
        size: "L"
    },
    {
        id: 2,
        name: "2 Lorem ipsum dolor sit amet",
        image: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        price: 500000,
        count: 3,
        size: "M"
    },
    {
        id: 3,
        name: "3 Lorem ipsum dolor sit amet",
        image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        price: 550000,
        count: 2,
        size: "XL"
    }
];

const reducer = (state, action) => {
    switch(action.type) {
        case INCREASE_COUNT : {
           const newState = state.map((product) => {
                if(product.id === action.payload.id) {
                  product.count++;
                  return {...product, count: product.count}; 
                }
                return product;
            })
            return newState;
        }
        case REDUCE_COUNT : {
            const newState = state.map((product) => {
                if(product.id === action.payload.id) {
                  product.count--;
                  if(product.count <= 0) {
                    product.count = 1;
                  }
                  return {...product, count: product.count}; 
                }
                return product;
            })
            return newState;
        }
        case DELETE_PRODUCT : {
            return state.filter((product) => product.id != action.payload.id)
        }
        default: {
            throw new Error("Action invalid")
        }
    }
};

export default reducer;