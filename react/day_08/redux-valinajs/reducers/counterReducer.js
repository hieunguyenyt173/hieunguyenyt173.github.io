
const initCount = 0;

const countReducer = (state = initCount, action) => {
    switch(action.type) {
        case "ADD" : {
            return state + 1;
        }
        case "SUBTRACT" : {
            return state - 1;
        }
        default : {
            return state;
        }
    }

}

export default countReducer