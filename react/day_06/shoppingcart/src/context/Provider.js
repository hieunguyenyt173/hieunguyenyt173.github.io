import { useReducer } from "react";
import Context from "./Context"
import reducer,{initialState} from '../store/reducer'

const Provider = ({ children }) => {
    const [products, dispatch] = useReducer(reducer, initialState);
    return (
        <Context.Provider value={{ products, dispatch }}>
            {children}
        </Context.Provider>
    )
}

export default Provider;