import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postService } from "../services/api";
import Input from "./common/Input";
import Textarea from "./common/Textarea";
import Button from "./common/Button";

function CreatePostForm() {
  const [form, setForm] = useState({ title: "", content: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!form.content.trim()) {
      newErrors.content = "Content is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      await postService.createPost({
        title: form.title.trim(),
        content: form.content.trim()
      });
      // Reset form
      setForm({ title: "", content: "" });
      // Navigate to posts list
      navigate("/");
    } catch (error) {
      alert("Failed to create post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Input
        label="Post Title"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Enter your post title..."
        required
        error={errors.title}
      />

      <Textarea
        label="Post Content"
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="Write your post content here..."
        rows={10}
        required
        error={errors.content}
      />

      <Button type="submit" disabled={loading}>
        {loading ? "Creating Post..." : "Create Post"}
      </Button>
    </form>
  );
}

export default CreatePostForm;
