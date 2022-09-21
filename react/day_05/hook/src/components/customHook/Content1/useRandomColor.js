import {useState, useRef} from "react";
const colors = ["red", "blue", "green","yellow"];
const randomColor = (currentColor) => {
    let newColor = currentColor;
    while(newColor == currentColor) {
        let index = Math.floor(Math.random() * colors.length)
        return colors[index];
    }
    return newColor;
};
 const useRandomColor = (init) => {
    const [color, setColor] = useState(init);
    const colorRef = useRef();
    const handleChangeColor = () => {
        let newColor = randomColor();
        colorRef.current = newColor
        setColor(newColor)
    }
    return [color,handleChangeColor];
 }

 export default useRandomColor;