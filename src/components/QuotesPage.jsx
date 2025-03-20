import { useState, useEffect } from 'react';

function QuotesPage() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch quotes');
        }
        return response.json();
      })
      .then((data) => {
        setQuotes(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading quotes...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Seuss Treasury</h1>
      <div className="quotes-list">
        {quotes.map((quote, index) => (
          <div key={index} className="quote-item">
            <p>"{quote.text}"</p>
            <p><em>- Dr. Seuss in {quote.book?.title || 'Unknown Book'}</em></p> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuotesPage;
