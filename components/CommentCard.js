import React from 'react';
import { MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import Avatar from '@mui/material/Avatar';

function CommentCard() {
  return (
    <div className="main-container">
      <div>
        <h3 className="comment-header">Comment</h3>
        <Avatar alt="Black Male" src="https://media.istockphoto.com/id/1405418742/photo/smiling-african-american-young-man-in-red-sweater-with-dreadlocks-looking-at-camera-with-arms.webp?b=1&s=170667a&w=0&k=20&c=gnKqG4RlS1eTpytLbszBGenNaXEoLW46HRmd4WsN5vc=" /> <MDBTextArea className="text-area-comment" />
        <MDBBtn className="btn-comment">Submit</MDBBtn>
      </div>

    </div>
  );
}

export default CommentCard;
