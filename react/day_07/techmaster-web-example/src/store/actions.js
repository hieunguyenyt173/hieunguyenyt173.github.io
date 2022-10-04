import { ADD_COUNT, ADD_ORDER, ADD_PRODUCT, DELETE_PRODUCT, LOGIN, LOGOUT, RESET_PRODUCT, SUBTRACT_COUNT, SYNC_AUTH, UPDATE_PASSWORD, UPDATE_PROFILE } from "./constants"

// Shopping cart
export const addCount = (id) => {
    return {
        type: ADD_COUNT,
        payload: { id }
    }
}

export const subtractCount = (id) => {
    return {
        type: SUBTRACT_COUNT,
        payload: { id }
    }
}

export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: { id }
    }
}

export const addProduct = (item) => {
    return {
        type: ADD_PRODUCT,
        payload: item
    }
}
export const resetProduct = () => {
    return {
        type: RESET_PRODUCT,
    }
}

// Auth
export const login = (data) => {
    return {
        type: LOGIN,
        payload: data // thông tin của user login thành công
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const updateProfile = (data) => {
    return {
        type: UPDATE_PROFILE,
        payload: data  //Thông tin của user cần cập nhật
    }  
}
export const syncAuth = (data) => {
    return {
        type: SYNC_AUTH,
        payload: data  //Thông tin của user cần cập nhật
    }  
}

export const addOrder = (data) => {
    return {
        type: ADD_ORDER,
        payload: data  //Thông tin của user cần cập nhật
    }  
}
