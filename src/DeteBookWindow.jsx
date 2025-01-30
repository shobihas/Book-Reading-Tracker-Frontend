import { useState } from "react";

const DeleteBookWindow=({books,onClose,onDeleteBook})=>{
    const [selectedBookId, setSelectedBookId] = useState('');
    const [updatedBook, setUpdatedBook] = useState({
            title: '',
            category: '',
            author: '',
            status: '',
        });
    const handleSubmit = (e) => {
        e.preventDefault();
        onDeleteBook(selectedBookId);
        onClose();
    };
    const handleBookSelect = (e) => {
        const bookId = e.target.value;
        setSelectedBookId(bookId);
        const selectedBook = books.filter(book => book.id != parseInt(bookId));
        if (selectedBook) {
            setUpdatedBook(selectedBook);
        }
    };
    return(<>
        <div className="dialog-overlay">
            <div className="dialog">
                <h2>Delete a Book</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label>
                            Select a Book:
                             <select value={selectedBookId} onChange={handleBookSelect}>
                                 <option value="">Choose a book</option>
                                 {books.map(book => (
                                    <option key={book.id} value={book.id}>{book.title}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className="dialog-buttons">
                    <button type="submit">Delete Book</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </div>

                </form>
            </div>
        </div>
    
    </>)
}
export default DeleteBookWindow;