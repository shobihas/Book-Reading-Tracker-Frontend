import React from 'react';
import { useLocation } from 'react-router-dom';

const BookDetails = () => {
  const location = useLocation();
  const book = location.state?.book;

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-details">
        <span>
      <h1>{book.title}</h1>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Status:</strong> {book.status}</p>
      <p><strong>Description:</strong> {book.description || 'No description available.'}</p>
      </span><span>
      <img src={`${book.image}`}/></span>
      {/* Add more details as needed */}
    </div>
  );
};

export default BookDetails;