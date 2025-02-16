import React, { useState } from "react";

const UpdateBookWindow = ({ books, onClose, onUpdateBook }) => {
  const [selectedBookId, setSelectedBookId] = useState("");
  const [updatedBook, setUpdatedBook] = useState({
    title: "",
    category: "",
    author: "",
    status: "",
  });
  const handleBookSelect = (e) => {
    const bookId = e.target.value;
    setSelectedBookId(bookId);

    
    const selectedBook = books.find((book) => book.id === bookId);
    if (selectedBook) {
      
      setUpdatedBook({
        title: selectedBook.title,
        category: selectedBook.category,
        author: selectedBook.author,
        status: selectedBook.status,
      });
    } else {
      
      setUpdatedBook({
        title: "",
        category: "",
        author: "",
        status: "",
      });
    }
  };

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateBook(selectedBookId, updatedBook);
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <h2>Update Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Select a Book:</label>
            <select value={selectedBookId} onChange={handleBookSelect}>
              <option value="">Choose a book</option>
              {books.map((book) => (
                <option key={book.id} value={book.id}>
                  {book.title}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={updatedBook.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <input
              type="text"
              name="category"
              value={updatedBook.category}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Author:</label>
            <input
              type="text"
              name="author"
              value={updatedBook.author}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Status:</label>
            <input
              type="text"
              name="status"
              value={updatedBook.status}
              onChange={handleInputChange}
            />
          </div>
          <div className="dialog-buttons">
            <button type="submit">Update Book</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBookWindow;