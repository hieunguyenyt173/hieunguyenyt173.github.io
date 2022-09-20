import {useState} from 'react'
// 1. Dùng khi nào?
// 2. Cú pháp?
// 3. Các lưu ý?
// 4. Ví dụ?
let numbers = [1, 2, 3, 4, 5];
export default function Counter () {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState({
        id: 1,
        name: "Hiếu Nguyễn",
        email: "hieunguyenyt173@gmail.com"
    });
    const [total, setTotal] = useState(() => {
        const rs = numbers.reduce((total, num) => total + num, 0)
        return rs;
    })
    
    const [products, setProducts] = useState([
        {id: 1, name: "Ao thun", price: 10000},
        {id: 2, name: "Quần âu", price: 20000},
        {id: 3, name: "Quần thun", price: 30000},
    ])
     const handleAdd = () => {
        setCount(count + 1);
    }
    const handleMulti = () => {
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        // Sủ dụng callback function
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    const changeName = () => {
        //Replacing
        // setUser({name: "abcxyz"})
        setUser({...user, name: "abcxyz"})
    }

    const changePrice = () => {
        let id = 1;
        let newPrice = 50000;
        let newProducts = products.map(product => {
            if(product.id === id) {
                return {...product, price: newPrice};
            }
            return product;
        });
        setProducts(newProducts)
    }


    return (
        <>
        <h1>Total: {total}</h1>
        <h1>User: {JSON.stringify(user)}</h1>
         <h1>Counter: {count}</h1>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleMulti}>Add multi</button>
        <button onClick={changeName}>Change Name</button>
        <h1>Products</h1>
        <ul>
            {products.map(product => (
                <li key={product.id}>{product.id}-{product.name}-{product.price}</li>
            ))}
        </ul>
        <button onClick={changePrice}>Change Price</button>
        {console.log("render")}
        </>
    )
} 