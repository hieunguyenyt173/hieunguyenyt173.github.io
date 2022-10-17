
import './App.css';
import Counter from './components/Counter';
import TodoList from './components/Todolist';
import {Routes, Route} from 'react-router-dom'
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import DetailUser from './components/DetailUser';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/users'>
        <Route index element={<UserList/>}/>
        <Route path=":userId" element={<DetailUser/>}/>
        <Route path="create" element={<CreateUser/>}/>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
