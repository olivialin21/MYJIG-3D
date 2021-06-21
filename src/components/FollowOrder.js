import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { StoreContext } from "../store"

export default function FollowOrder({post}) {
  const { state: { userSignin : { userInfo } }, dispatch } = useContext(StoreContext);
  const [isFollow,setFollow] = useState(false);
  
  const toggleFollow = () => {
    setFollow(!isFollow);
  }

  return(
    <>
      {userInfo ? 
        <>
          {isFollow ?
            <button className="followOrder-btn" onClick={toggleFollow}>Unfollow</button>
            :
            <button onClick={toggleFollow}>Follow the order</button>
          }
        </>
      :
        <Link to="/login">
          <button>Follow the order</button>
        </Link>
      }

    </>
  );
}