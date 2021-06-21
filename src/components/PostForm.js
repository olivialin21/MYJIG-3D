import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { StoreContext } from "../store"
import { postRequest } from '../actions'

export default function PostForm() {
  const { state: { userSignin : { userInfo } }, dispatch } = useContext(StoreContext);

  const onPost = (e) => {
    e.preventDefault();
    const title = document.getElementById("title");
    const requirement = document.getElementById("requirement");
    const content = {
      title: title.value,
      requirement: requirement.value
    };
    if (content.title !== '' && content.requirement !==''){
      postRequest(dispatch, content);
      document.getElementById("form").reset();
    } else {
      if (content.title.length === '') {
        title.classList.add("bdr");
      } else {
        title.classList.remove("bdr");
      }
      if (content.requirement.length === ''){
        requirement.classList.add("bdr");
      } else {
        requirement.classList.remove("bdr");
      }
    }
  }  

  return(
    <div className="commonForm postForm mt75">
      <form className="postForm-form" id="form">
        <div className="form-group commonForm-block">
          <label for="exampleInputEmail1">Title</label>
          <input type="text" className="form-control" id="title" />
        </div>
        <div className="form-group commonForm-block mb-1">
          <label for="exampleInputPassword1">Requirement</label>
          <textarea className="form-control" id="requirement" />
        </div>
        {userInfo ? 
          <button type="submit" onClick={onPost}>POST</button>
        :
          <Link to="/login">
            <button>POST</button>
          </Link>  
        }
      </form>
    </div>
  );
}