import {ADD_TODO, DELETE_TODO, EDIT_TODO} from "./constants"
export const initialState = [
    {
        id: 1,
        title: "đi chơi",
        status: true
    },
    {
        id: 2,
        title: "Làm bài tập",
        status: false
    },
    {
        id: 3,
        title: "Đá bóng",
        status: false
    }
];
const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case ADD_TODO : {
            return [...state, action.payload]
        }
        case DELETE_TODO : {
            return state.filter(todo => todo.id != action.payload.id);
        }
        case EDIT_TODO : {
            
        }
        default : {
            return state;
        }
    }
}

export default reducer;