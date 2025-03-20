import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetailsPage = () => {
  const { id } = useParams(); 
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://seussology.info/api/books/${id}`);
        const data = await response.json();
        setBookDetails(data); 
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]); 

  if (!bookDetails) return <div>Loading...</div>; 

  return (
    <div className="book-details">
      <h2>{bookDetails.title}</h2>
      <h3>Published: {bookDetails.year_published}</h3>
      <img
        src={bookDetails.image} 
        alt={bookDetails.title}
        style={{ width: '150px', height: 'auto' }} 
      />
      <p>{bookDetails.description}</p> {}
    </div>
  );
};

export default BookDetailsPage;
