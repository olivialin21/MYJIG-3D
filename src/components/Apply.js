import React, { useContext } from "react";
import { StoreContext } from "../store"
import { sendEmail } from '../actions'

export default function Apply({post}) {
  const { dispatch } = useContext(StoreContext);

  const onSubmit = () => {
    const applyContent = document.getElementById("applyContent").value;
    if (applyContent !== ''){
      const emailInfo = {
        emailTo: post.email,
        applyContent
      };
      sendEmail(dispatch, emailInfo);
    } else {
      alert("尚有空格")
    }
  }

  return(
    <>
      <button data-toggle="modal" data-target="#applyForm">Apply</button>
      <div className="modal fade" id="applyForm" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                <textarea className="form-control" id="applyContent" />
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
  );
}