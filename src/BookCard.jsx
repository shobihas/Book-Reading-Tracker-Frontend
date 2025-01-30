import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="book-card-details">
        <h2>{book.title}</h2>
        <p><strong>Category:</strong> {book.category}</p>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Status:</strong> {book.status}</p>
      </div>
      <Link
        to={`/book/${book.id}`}
        state={{ book }}
        style={{ textDecoration: 'none', color: 'inherit' }}
        className="card-button"
      >
        More info
      </Link>
    </div>
  );
};

export default BookCard;