import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div className="Book-item">
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Status:</strong> {book.status}</p>
    </div>
  );
};

export default BookItem;
