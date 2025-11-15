import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postService } from "../services/api";
import PostCard from "./postCard";
import Button from "./common/Button";

function AllPostsPage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await postService.getPosts();
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleCreatePost = async () => {
    try {
      await postService.createPost({ title: "New Post", content: "This is a new post." });
      // Fetch the latest posts after creating a new post
      fetchPosts();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <h1>All Posts</h1>
      <Button onClick={handleCreatePost}>Create Post</Button>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}

export default AllPostsPage;
