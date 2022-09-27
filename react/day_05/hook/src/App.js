import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import UseState from "./components/UseState"
import UseEffect from "./components/UseEffect"
import API from "./components/UseEffect/API"
import Clock from "./components/UseEffect/Clock"
import Content from "./components/UseRef/Content"
import ReactMemo from "./components/ReactMemo";
import Content1 from './components/customHook/Content1'
import Counter from "./components/useReducer/Counter"
import TodoList from './components/useReducer/TodoList';
import Blog from './components/useContext/Blog';
function App() {
  const [isShowClock, setIsShowClock] = useState(true)
  return (
    <div className="App" style={{height: 2000}}>
      
      {/* <UseEffect /> */}
      {/* <API /> */}
      {/* <Content /> */}
      {/* <ReactMemo /> */}
      {/* <Content1 /> */}
      {/* <Counter /> */}
      <TodoList/>
      {/* <Blog/> */}
      {/* <button onClick={() => setIsShowClock(!isShowClock)}>Toggle</button>
      {isShowClock && <Clock />} */}
    </div>
  );
}

export default App;
