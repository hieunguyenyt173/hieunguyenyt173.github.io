const initTodos = [
    { id: 1, title: "Lam bai tap" },
    { id: 2, title: "Di choi" },
];

const todoReducer = (state = initTodos, action) => {
  

    switch (action.type) {
        case "ADD_TODO": {
            return [...state, action.payload];
        }
        default: {
            return state;
        }
    }
}

export default todoReducer