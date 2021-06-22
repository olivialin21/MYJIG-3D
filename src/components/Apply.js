import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { StoreContext } from "../store"
import { sendEmail } from '../actions'

export default function Apply({post}) {
  const { state: { userSignin : { userInfo } }, dispatch } = useContext(StoreContext);
  const modalId = "#"+post.id;
  const applyContentId = post.id+"apply";
  const [isModalOpen,toggleModal] = useState(false);

  const onToggleModal = () => {
    toggleModal(!isModalOpen);
  }

  const onSubmit = () => {
    const applyContent = document.getElementById(`${applyContentId}`);
    if (applyContent !== null){
      const emailInfo = {
        name:post.user,
        emailTo: post.email,
        title: post.title,
        id:post.id,
        applyContent: applyContent.value
      };
      const consult = sendEmail(dispatch, emailInfo);
      if (consult) {
        applyContent.value = "";
        toggleModal(!isModalOpen);
        const elements = document.getElementsByClassName("modal-backdrop");
        while(elements.length > 0){
          elements[0].parentNode.removeChild(elements[0]);
        } 
        const modalBg = document.getElementById(post.id);
        modalBg.style = "display: none";
        modalBg.setAttribute('aria-hidden', 'true');
        modalBg.setAttribute('aria-modal', 'false');
        modalBg.setAttribute('role', '');
      } else {
        alert("發生錯誤")
      }
    } else {
      alert("尚有空格")
    }
  }

  return(
    <>
      {userInfo ? 
        <>
          <button data-toggle="modal" data-target={modalId} onClick={onToggleModal}>Apply</button>
          <div className={isModalOpen?"modal show":"modal fade"} id={post.id} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered apply-modal" role="document">
              <div className="modal-content apply-modal-block">
                <div className="modal-header apply-modal-header">
                  <div type="button" className="apply-modal-close" data-dismiss="modal" aria-label="Close">
                    <span className="apply-modal-closeG" aria-hidden="true">&times;</span>
                    <span className="apply-modal-closeW" aria-hidden="true">&times;</span>
                  </div>
                </div>
                <div className="modal-body apply-modal-body">
                  <p>Apply to : "{post.user}"</p>
                  <div>
                    <textarea className="form-control" id={applyContentId} />
                  </div>
                </div>
                <div className="modal-footer apply-modal-footer">
                  <div onClick={onSubmit}>
                    <p>SUBMIT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      :
        <Link to="/login">
          <button>Apply</button>
        </Link>
      }
    </>
  );
}