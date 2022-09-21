
import { useReducer} from 'react'
// 1.initial state
const initialState = 0;

// 2.action type
const ADD_COUNT = "ADD_COUNT";
const SUBTRACT_COUNT = "ADD_SUBTRACT";
// type : Kiểu hành động
// payload : Dữ liệu gửi để xử lí hành động
// Tạo reducer
// state : state hiện tại
// action : object chứa thông tin để thay đổi state
const reducer = (state, action) => {
    switch(action.type) {
        case ADD_COUNT : {
            return state + action.value;
        }
        case SUBTRACT_COUNT : {
            return state - action.value;
        }
        default : {
            throw new Error(" Action invalid")
        }
    }
    
} 






function Counter(){
    // count : state hiên tại
    // dispatch : là function gửi thông tin về action (object) cho reducer để thay đổi state
    const [count, dispatch] = useReducer(reducer, initialState);
    const handleAdd =() => {
        dispatch({type : ADD_COUNT, value: 5});
    };

    const handleSubtract =() => {
        dispatch({type : SUBTRACT_COUNT, value : 3});
    }
return (
    <>
    <h1>Counter: {count}</h1>
    <button onClick={handleAdd}>Cộng</button>
    <button onClick={handleSubtract}>Trừ</button>
    </>
)
} export default Counter;