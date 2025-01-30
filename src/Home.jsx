import React, { useEffect, useState } from 'react';

import BookCard from './BookCard';
import AddBookWindow from './AddBookWindow';
import UpdateBookWindow from './UpdateBookWindow';
import DeleteBookWindow from './DeteBookWindow';
import axios from "axios";
import { Link } from 'react-router-dom'; 

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [isAddBookDialogOpen, setIsAddBookDialogOpen] = useState(false);
  const [isUpdateBookDialogOpen, setIsUpdateBookDialogOpen] = useState(false);
  const [isDeleteBookDialogOpen, setIsDeleteBookDialogOpen] = useState(false);

  const openAddBookDialog = () => setIsAddBookDialogOpen(true);
  const closeAddBookDialog = () => setIsAddBookDialogOpen(false);
  const openUpdateBookDialog = () => setIsUpdateBookDialogOpen(true);
  const closeUpdateBookDialog = () => setIsUpdateBookDialogOpen(false);
  const openDeleteBookDialog = () => setIsDeleteBookDialogOpen(true);
  const closeDeleteBookDialog = () => setIsDeleteBookDialogOpen(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error("No token found");
      return;
    }
    const fetchData = async () => {
      const response = await axios.get("https://book-reading-tracker.onrender.com/api/books", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      console.log("Fetched", response.data);
      setBooks(response.data);
    };
    fetchData();
  }, []);

  const addBook = async (newBook) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "https://book-reading-tracker.onrender.com/api/books",
        { ...newBook, image: newBook.image || "" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedBooks = [...books, response.data];
      setBooks(updatedBooks);
      console.log("Added:", response.data);
      closeAddBookDialog();
    } catch (error) {
      console.error("Error adding book:", error.response?.data || error.message);
    }
  };

  const updateBook = async (bookId, updatedBook) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `https://book-reading-tracker.onrender.com/api/books/${bookId}`,
        updatedBook,
        { headers: { Authorization: `Bearer ${token}` } }
      );
  
    
      const response = await axios.get("https://book-reading-tracker.onrender.com/api/books", {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      setBooks(response.data); 
      closeUpdateBookDialog();
    } catch (error) {
      console.error("Error updating book:", error.response?.data || error.message);
    }
  };
  
  const deleteBook = async (bookId) => {
    console.log("Deleting book with id:", bookId);
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found, unauthorized request");
      return;
    }
    try {
      await axios.delete(`https://book-reading-tracker.onrender.com/api/books/${bookId}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
      closeDeleteBookDialog();
    } catch (error) {
      console.error("Error deleting book:", error.response?.data || error.message);
    }
  };

  const sortBooks = (key) => {
    setSortBy(sortBy === key ? null : key);
    if (sortBy !== key) {
      const sortedBooks = [...books].sort((a, b) => a[key].localeCompare(b[key]));
      setBooks(sortedBooks);
    } else {
      const originalOrder = [...books].sort((a, b) => a.id - b.id);
      setBooks(originalOrder);
    }
  };

  
  const searchBooks = (searchTerm) => {
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  const searchUser=(email)=>{
    return useResolvedPath.finf((user)=>
    user.email.toLowerCase().includes(email.toLowerCase()));
  }
  const filteredBooks = searchBooks(searchTerm);

  return (
    <div className="home">
      <header className='home-header'>
        <h1>BOOK SHELF</h1>
      </header>
      <input
        type="text"
        placeholder="Search a Book..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="content-container">
        <div className="buttons-container">
          <button onClick={() => sortBooks("category")}>Group By Category</button>
          <button onClick={() => sortBooks("author")}>Group By Author</button>
          <button onClick={() => sortBooks("status")}>Group By Status</button>
          <button onClick={openAddBookDialog}>Add a Book</button>
          <button onClick={openUpdateBookDialog}>Update a Book</button>
          <button onClick={openDeleteBookDialog}>Delete a Book</button>
          <br />
          <br />
          <Link to="/profile">Profile</Link>
          <Link to="/">Logout</Link>
        </div>
        <div className="book-list">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} books={books} />
          ))}
        </div>
      </div>
      {isAddBookDialogOpen && (
        <AddBookWindow onClose={closeAddBookDialog} onAddBook={addBook} />
      )}
      {isUpdateBookDialogOpen && (
        <UpdateBookWindow books={books} onClose={closeUpdateBookDialog} onUpdateBook={updateBook} />
      )}
      {isDeleteBookDialogOpen && (
        <DeleteBookWindow books={books} onClose={closeDeleteBookDialog} onDeleteBook={deleteBook} />
      )}
    </div>
  );
};

export default Home;