import React, { useState } from 'react';
import Textarea from './common/Textarea';
import Button from './common/Button';

function CommentForm({ onSubmit, loading = false }) {
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side validation: ensure comment is not empty
    if (!comment.trim()) {
      setError('Comment cannot be empty');
      return;
    }

    // Clear error and submit
    setError('');
    onSubmit({ text: comment.trim() });
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <Textarea
        label="Add a comment"
        name="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment here..."
        required
        error={error}
      />
      <Button type="submit" disabled={loading}>
        {loading ? 'Posting...' : 'Post Comment'}
      </Button>
    </form>
  );
}

export default CommentForm;
