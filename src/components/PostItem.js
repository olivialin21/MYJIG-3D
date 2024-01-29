import FollowOrder from "./FollowOrder"
import Apply from "./Apply"

export default function PostItem({ post }) {
  return (
    <>
      <div className="postItem">
        <div className="postItem-blockL">
          <p className="postItem-title"><span>// </span>{post.title}</p>
          <p>{post.user}：</p>
          <p>{post.requirement}</p>
        </div>
        <div className="postItem-blockR">
          <FollowOrder post={post} />
          <Apply post={post} />
          {post.applications != null ?
            <p>{Object.keys(post.applications).length} {Object.keys(post.applications).length > 1 ? 'applications' : 'application'}</p>
            :
            <p>0 application</p>
          }
        </div>
      </div>
      <div className="postItem-lineW"></div>
    </>
  );
}