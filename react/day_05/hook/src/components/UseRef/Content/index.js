import React, {useState, useRef, useEffect} from "react"
import videotiktok from "./tiktok.mp4"
function Content() {
    const [value, setValue] = useState("");
    const [time, setTime] = useState(100);
    const [color, setColor] = useState("red");
    const colors = ["red", "blue", "green","yellow"];
    const randomColor = (currentColor) => {
        let newColor = currentColor;
        while(newColor == currentColor) {
            let index = Math.floor(Math.random() * colors.length)
            return colors[index];
        }
        return newColor;
    }
    const inputRef = useRef();
    const countRef = useRef(0)
    const videoRef = useRef();
    const timeRef = useRef();
    const colorRef = useRef()
    countRef.current++;
    useEffect(() => {
        inputRef.current.focus();
    })

    const handlePlay = () => {
        videoRef.current.play();
    }

    const handlePause = () => {
        videoRef.current.pause();
    }

    const handleStart = () => {
        if(!timeRef.current) {
        timeRef.current = setInterval(() => {
            setTime(time => time - 1)
        }, 1000)
        }
    }

    const handleStop = () => {
        clearInterval(timeRef.current);
        timeRef.current = 0;
    }

    const handleChangeColor = () => {
        let newColor = randomColor();
        colorRef.current = newColor
        setColor(newColor)
    }
    return (
      <div>
        <h1>Render : {countRef.current}</h1>
        <input
        ref={inputRef}
        placeholder="Enter Name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
        {console.log("render")}
        <br/>
        <video 
            ref={videoRef}
            src={videotiktok}
            width={300}
            controls
        />
        <br/>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <br/>
        <h1>Đồng hồ bấm giờ : {time}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <br/>
        <div style={{width : 200, height: 200, backgroundColor: color}} onClick={handleChangeColor}></div>
      </div>
    );
  }
  
  export default Content;
  