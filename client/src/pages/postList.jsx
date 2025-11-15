import React, { useState, useEffect } from 'react';
import { postService } from '../services/api';
import PostCard from '../components/postCard';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await postService.getPosts();
        setPosts(response.data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Latest Posts</h1>
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
