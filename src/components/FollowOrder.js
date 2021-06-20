import { useState } from "react";

export default function FollowOrder({post}) {
  const [isFollow,setFollow] = useState(false);
  
  const toggleFollow = () => {
    setFollow(!isFollow);
  }

  return(
    <>
      {isFollow ?
        <button className="followOrder-btn" onClick={toggleFollow}>Unfollow</button>
        :
        <button onClick={toggleFollow}>Follow the order</button>
      }
    </>
  );
}