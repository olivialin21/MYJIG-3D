import { useEffect, useContext } from "react";
import { StoreContext } from "../store";
import { setPostList } from "../actions"
import PostItem from "./PostItem";

export default function PostList() {
  const { state : { page : { posts } } , dispatch } = useContext(StoreContext);
  useEffect(() => {
    setPostList(dispatch);
  }, [posts]);
  
  return(
    <div className="postList">
      <div className="postList-lineY"></div>
      {/* <p>Sort by：Newest ▼</p> */}
      {posts.map( post => (
        <PostItem key={post.id} post = {post}/>
      ))}
    </div>
  );
}