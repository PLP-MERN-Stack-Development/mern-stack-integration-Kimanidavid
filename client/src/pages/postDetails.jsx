// src/pages/CreatePost.jsx
import { useState } from "react";
import Input from "../components/common/Input";
import Textarea from "../components/common/Textarea";
import Button from "../components/common/Button";
import { postService } from "../services/api";

function CreatePost() {
  const [form, setForm] = useState({ title: "", content: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    await postService.createPost(form);
    alert("Post created!");
    setForm({ title: "", content: "" });
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input label="Title" name="title" value={form.title} onChange={handleChange} required />
      <Textarea label="Content" name="content" value={form.content} onChange={handleChange} required />
      <Button type="submit">Create</Button>
    </form>
  );
}
export default CreatePost;