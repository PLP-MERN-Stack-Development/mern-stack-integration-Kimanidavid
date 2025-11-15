import React, { useState, useEffect } from 'react';
import Button from './common/Button';

function CommentList({ comments = [] }) {
  // Local state for likes: { commentIndex: likeCount }
  const [likes, setLikes] = useState({});
  // Local state for user likes: { commentIndex: hasLiked }
  const [userLikes, setUserLikes] = useState({});

  // Load likes from localStorage on mount
  useEffect(() => {
    const storedLikes = localStorage.getItem('commentLikes');
    const storedUserLikes = localStorage.getItem('userCommentLikes');
    if (storedLikes) {
      setLikes(JSON.parse(storedLikes));
    }
    if (storedUserLikes) {
      setUserLikes(JSON.parse(storedUserLikes));
    }
  }, []);

  // Save likes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('commentLikes', JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    localStorage.setItem('userCommentLikes', JSON.stringify(userLikes));
  }, [userLikes]);

  const handleLike = (commentIndex) => {
    setLikes(prev => ({
      ...prev,
      [commentIndex]: (prev[commentIndex] || 0) + (userLikes[commentIndex] ? -1 : 1)
    }));
    setUserLikes(prev => ({
      ...prev,
      [commentIndex]: !prev[commentIndex]
    }));
  };

  if (!comments.length) {
    return <p>No comments yet.</p>;
  }

  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index} style={{
          border: '1px solid #ddd',
          borderRadius: '4px',
          padding: '1rem',
          marginBottom: '1rem'
        }}>
          <p style={{ margin: 0, lineHeight: '1.5' }}>{comment.text}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
            <small style={{ color: '#666' }}>
              {new Date(comment.createdAt).toLocaleDateString()}
            </small>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Button
                onClick={() => handleLike(index)}
                style={{
                  padding: '0.25rem 0.5rem',
                  fontSize: '0.8rem',
                  backgroundColor: userLikes[index] ? '#ff6b6b' : '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                {userLikes[index] ? 'Unlike' : 'Like'} ({likes[index] || 0})
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
