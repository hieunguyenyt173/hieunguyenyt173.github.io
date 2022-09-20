import React,{ useState, useEffect } from "react";

export default function API() {
    const [data, setData] = useState([]);
    const [type, setType] = useState("posts");
    const options = ["posts","comments", "albums"]
  useEffect(() => {
    console.log("fetch APi")
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => setData(json));
    const fetchData = async () => {
        try {
           let response = await fetch(`https://jsonplaceholder.typicode.com/${type}`)
           let data = await response.json();
           setData(data)
        } catch (error) {
            console.log(error)
        }
    }
    fetchData();
  }, [type]);
  return (
    <>
      <h2>API</h2>
      {options.map(option => (
        <button key={option} 
        style={option === type ? {backgroundColor: "#000", color: "#fff"} : {}}
        onClick={() => setType(option)}>{option}</button>
      ))}
      <h1>Type: {type}</h1>
      <ul>
        {data.map(item => (
            <li key={item.id}>{item.title || item.name}</li>
        ))}
      </ul>
    </>
  );
}
