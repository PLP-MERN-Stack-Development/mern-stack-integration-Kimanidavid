import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from '../components/commentForm';
import CommentList from '../components/commentList';
import { postService } from '../services/api';

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submittingComment, setSubmittingComment] = useState(false);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await postService.getPost(id);
      setPost(response.data);
    } catch (err) {
      setError('Failed to load post');
    } finally {
      setLoading(false);
    }
  };

  const handleCommentSubmit = async (commentData) => {
    setSubmittingComment(true);
    try {
      await postService.addComment(id, commentData);
      fetchPost(); // Refresh post to show new comment
    } catch (err) {
      alert('Failed to add comment');
    } finally {
      setSubmittingComment(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <article style={{ marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>{post.title}</h1>
        <p style={{ color: '#666', marginBottom: '1rem' }}>
          By {post.author?.name || 'Anonymous'} • {new Date(post.createdAt).toLocaleDateString()}
        </p>
        <div style={{ lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
          {post.content}
        </div>
      </article>

      <section>
        <h2>Comments ({post.comments?.length || 0})</h2>

        <CommentForm onSubmit={handleCommentSubmit} loading={submittingComment} />

        <CommentList comments={post.comments || []} />
      </section>
    </div>
  );
}

export default PostDetails;
