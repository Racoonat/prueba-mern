import React, { useEffect, useState } from 'react';
import BookItem from './bookItem';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/api/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="Book-list">
      {books.map(book => (
        <BookItem key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BookList;