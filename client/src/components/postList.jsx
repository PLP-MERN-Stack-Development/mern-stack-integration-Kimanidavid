/*************  ✨ Windsurf Command ⭐  *************/
const PostList = ({ posts, loading }) => {
  if (loading) {
    return <div className="d-flex justify-content-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>;
  }

  return (
    <div className="row gx-5">
      {posts.map((post) => (
        <div key={post._id} className="col-md-4">
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
/*******  550b436a-b3ff-49b1-aec7-76a7c707573c  *******/