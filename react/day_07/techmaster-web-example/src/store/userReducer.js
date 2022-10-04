import { UPDATE_PASSWORD, UPDATE_PROFILE } from "./constants";
import { users } from "data/user-data";
// 1. Tạo state
export const initUsers = JSON.parse(localStorage.getItem("users")) || [...users];

// 2. Tạo reducer
const useReducer = (state, action) => {

    let newState = [];
    switch (action.type) {
        
        case UPDATE_PROFILE: {
            const userUpdate = action.payload;
            newState = state.map(user => {
                if(user.id === userUpdate.id) {
                    return {...user, ...userUpdate}
                }
                return user;
            })
            break;
        }
        default: {
            newState = [...state];
            break;
        }
    }

    localStorage.setItem("users", JSON.stringify(newState));
    return newState;
};

export default useReducer;