
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import RouteStydy from './components/RouteStydy';
import Frontend from './components/Frontend';
import Php from './components/Php';
import OnlabCourse from './components/OnlabCourse';
function App() {
  return (
    <>
  <Sidebar />
  <div className="content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/route" element={<RouteStydy />}>
        <Route path="frontend" element={<Frontend />}/>
        <Route path="php" element={<Php />}/>
      </Route>
      <Route path="/onlab" element={<OnlabCourse />} />
    </Routes>
  </div>
  </>
  );
}

export default App;
