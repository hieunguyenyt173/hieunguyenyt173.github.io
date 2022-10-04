import React, { useReducer } from 'react'
import Context from './Context'
import cartReducer, { initCart } from 'store/cartReducer';
import { courses, topics } from '../data/course-data';

import authReducer, { initAuth } from 'store/authReducer';
import userReducer, {initUsers} from 'store/userReducer';
import orderReducer, {initOrder} from 'store/orderReducer';
function Provider({ children }) {
    const [products, dispatchCart] = useReducer(cartReducer, initCart);
    const [auth, dispatchAuth] = useReducer(authReducer, initAuth);
    const [users, dispatchUser] = useReducer(userReducer, initUsers);
    const [orders, dispatchOrder] = useReducer(orderReducer, initOrder);


    const value = {
        courses,
        topics,
        users,
        dispatchUser,
        products,
        dispatchCart,
        auth,
        dispatchAuth,
        orders,
        dispatchOrder
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default Provider