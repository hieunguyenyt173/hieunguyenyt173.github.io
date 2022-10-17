export const addUser = (newUser) => {
    return {
        type: "ADD_USER",
        payload: newUser
    }
}

export const removeUser = (userId) => {
    return {
        type: "REMOVE_USER",
        payload: userId
    }
}

export const updateUser = () => {
    return {
        type: "FILTER",      
    }
}