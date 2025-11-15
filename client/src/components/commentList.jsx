import React, { useState } from 'react';
import Button from './common/Button';

function CommentList({ comments = [] }) {
  // Local state for likes: object with comment index as key, value as like count
  const [likes, setLikes] = useState({});

  const handleLike = (index) => {
    setLikes(prev => ({
      ...prev,
      [index]: (prev[index] || 0) + 1
    }));
  };

  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index} style={{
          border: '1px solid #ddd',
          borderRadius: '4px',
          padding: '1rem',
          marginBottom: '1rem'
        }}>
          <p style={{ margin: 0, lineHeight: '1.5' }}>{comment.content}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
            <small style={{ color: '#666' }}>
              {new Date(comment.createdAt).toLocaleDateString()}
            </small>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Button onClick={() => handleLike(index)} size="small">
                👍 Like
              </Button>
              <span>{likes[index] || 0} likes</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
