import { useState } from "react";
import { postService } from "../../services/api";
function CreatePostForm() {
  const [form, setForm] = useState({ title: "", content: "" });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    await postService.createPost(form);
    alert("Post created!");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="title" onChange={handleChange} placeholder="Title" />
      <textarea name="content" onChange={handleChange} placeholder="Write your post..." />
      <button type="submit">Create</button>
    </form>
  );
}
export default CreatePostForm;
