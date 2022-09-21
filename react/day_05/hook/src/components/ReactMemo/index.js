import {useState, useCallback, useMemo} from "react";
import PostItem from "./PostItem";
function Post () {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [products, setProducts] = useState([
        {id: 1, name: "Ao thun", price: 10000},
        {id: 2, name: "Quần âu", price: 20000},
        {id: 3, name: "Quần thun", price: 30000},
    ])
    const handleClick= useCallback(() => {
        console.log("Handle Click")
    },[]);
    //useCallback : const func = useCallback(callback,[deps])
    // useCallback : Tránh tạo lại function nếu không có sự thay đổi về props

    //useMemo : const value = useMemo(callback,[deps])
    // useMemo : Tránh tính toán function nếu không có sự thay đổi về deps
    const total = useMemo(() => {
        let rs =  products.reduce((total, product) => total + product.price, 0)
         console.log(rs)
         return rs;
    },[products]);

    const AddProduct =() => {
        setProducts([...products, {
            id: products.length + 1,
            title: "new Peoduct " + Math.random(),
            price: 500000
        }])
    };
    
    return (
        <>
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <h1>Counter1: {count1}</h1>
        
        <button onClick={() => setCount1(count1 + 1)}>Add1</button>
        <button onClick={AddProduct}>Add Product</button>
        <PostItem count={count} handleClick={handleClick}/>
        </>
    )
}
export default Post;