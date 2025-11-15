// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PostList from "./pages/PostList";
import PostDetails from "./pages/PostDetails";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Posts</Link>
        <Link to="/create">Write</Link>
      </nav>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts/:id" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
