import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import UseState from "./components/UseState"
import UseEffect from "./components/UseEffect"
import API from "./components/UseEffect/API"
import Clock from "./components/UseEffect/Clock"
import Content from "./components/UseRef/Content"
function App() {
  const [isShowClock, setIsShowClock] = useState(true)
  return (
    <div className="App" style={{height: 2000}}>
      
      {/* <UseEffect /> */}
      {/* <API /> */}
      <Content />

      {/* <button onClick={() => setIsShowClock(!isShowClock)}>Toggle</button>
      {isShowClock && <Clock />} */}
    </div>
  );
}

export default App;
