import React from 'react';

function Review({ name, bookName, comment }) {
  return (
    <div className="card m-2 p-2">
      <h5 className="card-title">{name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{bookName}</h6>
      <p className="card-text">{comment}</p>
    </div>
  );
}

export default Review;
