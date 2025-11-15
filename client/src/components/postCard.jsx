import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.content}</p>
        <p className="card-text">
          <small className="text-muted">
            Posted by {post.author?.name || 'Anonymous'} on {new Date(post.createdAt).toLocaleString()}
          </small>
        </p>
        <Link to={`/posts/${post._id}`} className="btn btn-primary">
          View
        </Link>
      </div>
    </div>
  );
};

export default PostCard;