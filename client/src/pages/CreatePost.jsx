import React from 'react';
import CreatePostForm from '../components/createPostForm';

function CreatePost() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Create New Post</h1>
      <CreatePostForm />
    </div>
  );
}

export default CreatePost;
