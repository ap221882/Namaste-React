import React from 'react';

import { comments } from './nestedCommentsData';

const CommentsComponent = () => {
  return (
    <div>
      //~? We have make this mapping function a recursive function
      {comments.map((comment, i) => {
        return (
          <SingleCommentComponent name={comment.name} text={comment.text} />
        );
      })}
    </div>
  );
};

const SingleCommentComponent = ({ name, text }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h4>{text}</h4>
    </div>
  );
};

export default CommentsComponent;
