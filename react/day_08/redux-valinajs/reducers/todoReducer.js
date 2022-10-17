
const initTodo = [
    {
        id: 1, 
        title: "làm bài tập"
    },
    {
        id: 1, 
        title: "đá bóng"
    }
];

const todoReducer = (state = initCount, action) => {
    switch(action.type) {
        case "ADD_TODO" : {
            return [...state, newTodo]
        }
        
    }

}

export default todoReducer