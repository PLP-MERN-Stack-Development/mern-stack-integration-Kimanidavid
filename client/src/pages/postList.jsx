/*************  ✨ Windsurf Command ⭐  *************/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from '../components/postCard';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('/api/posts');
      setPosts(response.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Blog Posts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
/*******  930e39fa-d14e-4d0a-9cd9-fcf7d92962d2  *******/