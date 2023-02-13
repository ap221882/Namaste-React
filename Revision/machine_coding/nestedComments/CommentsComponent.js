import React from 'react';

import { comments } from './nestedCommentsData';

const renderComments = (comments) => {
  return comments.map((comment, i) => {
    return (
      <div
        style={{
          marginLeft: '2rem',
          padding: '0 1rem',
          border: '1px solid black',
        }}
        //~* Not a right way, fetch key from the data itself
          // key={i}
      >
        <SingleCommentComponent
          name={comment.name}
          text={comment.text}
          
        />
        {comment?.replies && renderComments(comment?.replies)}
      </div>
    );
  });
};

const CommentsComponent = () => {
  return <div>{renderComments(comments)}</div>;
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
