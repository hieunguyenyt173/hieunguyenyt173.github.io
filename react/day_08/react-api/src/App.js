
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PostDetail from './pages/PostDetail';
import PostList from './pages/PostList';
import UserList from './pages/UserList';
import UserPost from './pages/UserPost';

// users
// users/1/posts
// posts
// posts/1
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/users'>
          <Route index element={<UserList />} />
          <Route path=':userId/posts' element={<UserPost />} />
        </Route>

        <Route path='/posts'>
          <Route index element={<PostList />} />
          <Route path=':postId' element={<PostDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;