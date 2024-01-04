/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { createIssueComment } from '../api/IssueData';

// eslint-disable-next-line react/prop-types
function CommentCard({ user, existingComments, issueId }) {
  console.log('existingcomments:', existingComments);
  const [comment, setComment] = useState('');
  const [comments, setcomments] = useState([]);

  const addNewComment = () => {
    const payload = {

      issueId: '',
      commentText: '',
      userId: '',

      dateTimeCommentCreated: new Date(),

    };
    createIssueComment(issueId, payload);
    setcomments(() => [...comments, payload]);
  };

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    setcomments(existingComments);
  }, [existingComments]);

  return (
    <div className="main-container">
      {comments !== undefined && comments.map((text) => (
        <div className="comment-container">{text?.commentText}</div>
      ))}
      <div className="comment-container">
        <div className="comment-flexbox">
          <h2 className="comment-text">Comment</h2>
          <textarea
            id="text_comment"
            value={comment}
            onChange={onChangeHandler}
            className="input-box"
            placeholder="Type comment"
          />
          Author: {user?.fbUser.displayName}

          <button onClick={addNewComment} className="comment-button" type="submit">Submit</button>
        </div>
      </div>

    </div>
  );
}

export default CommentCard;
