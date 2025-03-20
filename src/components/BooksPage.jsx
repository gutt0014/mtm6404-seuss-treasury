import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then(response => response.json())
      .then(data => setBooks(data)) 
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  if (books.length === 0) {
    return <p>Loading...</p>; 
  }

  return (
    <div>
      <h1>Seuss Treasury</h1>
      <div className="container">
        {books.map(book => (
          <div key={book.id} style={{ marginBottom: '20px' }}>
            <Link to={`/book/${book.id}`}>
              <img className='covers'
                src={book.image} 
                alt={book.title}
                style={{ width: '150px', height: 'auto' }} 
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BooksPage;
