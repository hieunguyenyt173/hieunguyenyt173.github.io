import { useEffect, useState } from "react";
/* Cú pháp: useEffect(callback, [deps])
// 1. useEffect(callback)
- Chạy lại mỗi khi component bị re-render
// 2. useEffect(callback, [])
- Chạy 1 lần duy nhất khi component mout
// 3. useEffect(callback, [deps])
- Mỗi khi deps thay đổi về mặt giá trị ==> chạy lại callback
// Diểm chung : Đều được gọi sau lần mount đầu tiên

Clean up ;
- Được chạy 1 lần duy nhất trước khi component bị unmount
- Chạy sau mỗi khi component bị re-render và trước hàm callback
*/
export default function Conntent () {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    // 1. useEffect(callback)
    // useEffect(() => {
    //     console.log("useEffect")
    // })
    // 2. useEffect(callback, [])
    // useEffect(() => {
    //     console.log("useEffect")
    // }, []);
    // 3. useEffect(callback, [deps])
    useEffect(() => {
        console.log("useEffect, [deps]")
    }, [count]);
    const handleAdd = () => {
        setCount(count + 1);
    }
    return (
        <>
        <h1>Counter: {count}</h1>
        <button onClick={handleAdd}>Add</button>
        <h1>Counter1: {count1}</h1>
        <button onClick={() => setCount1(count1 + 1)}>Add</button>
        {console.log("render")}
        </>
    )
}