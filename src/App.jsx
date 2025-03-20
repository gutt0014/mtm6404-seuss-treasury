import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/NavBar';
import BooksPage from './components/BooksPage';
import BookDetailsPage from './components/BookDetailsPage';
import QuotesPage from './components/QuotesPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/books" />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
        <Route path="/quotes" element={<QuotesPage />} />
      </Routes>
    </div>
  );
}

export default App;
