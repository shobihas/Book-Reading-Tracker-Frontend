import React from 'react';
import { Link } from 'react-router';
const App = () => {
  return (
    <>
    <div className="container">
      <header className="header">
        <h1>Book Reading Tracker</h1>
      </header>
      <main className="main-content">
      <div className="features-section">
          <img 
            src="wallpaper.webp"
            alt="Book Reading Tracker Cover" 
            style={{ width: '100%', height: '100%', borderRadius: '15px' }} 
          />
        </div>
        <div className="auth-section">
          <div className="auth-card">
            <Link to="/signin" className='auth-button'>SignIn</Link>
            <p>OR</p>
            <Link to="/signup" className='auth-button'>SignUp</Link>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default App;
