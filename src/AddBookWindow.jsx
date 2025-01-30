import React, { useState } from 'react';
import './index.css';

const AddBookWindow = ({ onClose, onAddBook }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Available');
  const [publishedYear, setPublishedYear] = useState('');
  const [image, setImage] = useState('');


  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, category, author,description,publishedYear,image,status,};
    onAddBook(newBook); 
  };

  return (<>
    <div className="dialog-overlay">
      <div className="dialog">
        <h2>Add a New Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Author:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Desscription:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>PublishedYear:</label>
            <input
              type="text"
              value={publishedYear}
              onChange={(e) => setPublishedYear(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Image:</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Status:</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="To Be Read">To Be Read</option>
              <option value="Completed">Completed</option>
              <option value="On the Process">On the Process</option>
            </select>
          </div>
          <div className="dialog-buttons">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Add Book</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddBookWindow;