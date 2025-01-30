import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Route,Routes } from 'react-router';
import Signin from './SignIn.jsx';
import Signup from './Signup.jsx';
import Home from './Home.jsx';
import AddBookWindow from './AddBookWindow.jsx';
import UpdateBookWindow from './UpdateBookWindow.jsx';
import DeleteBookWindow from './DeteBookWindow.jsx';
import BookDetails from './BookDetails.jsx';
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/addbook" element={<AddBookWindow/>} />
        <Route path="/updatebook" element={<UpdateBookWindow/>} />
        <Route path="/deletebook" element={<DeleteBookWindow/>} />
        <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
        </BrowserRouter>
    
)
