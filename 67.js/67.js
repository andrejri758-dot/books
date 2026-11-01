

const genres = [
  'Nonfiction', 'Sci-Fiction', 'Fantasy', 'Fiction', 
  'History', 'Horror', 'Thriller', 'Mystery', 
  'Biography', 'Childrenbooks', 'Poetries'
];

const relatedBooks = [
  { id: 1, title: 'The Lean Startup', author: 'Eric Ries', image: 'https://via.placeholder.com/150x220' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', image: 'https://via.placeholder.com/150x220' },
  { id: 3, title: 'The $100 Startup', author: 'Chris Guillebeau', image: 'https://via.placeholder.com/150x220' },
  { id: 4, title: 'Zero to One', author: 'Peter Thiel', image: 'https://via.placeholder.com/150x220' },
  { id: 5, title: 'Unshakeable', author: 'Tony Robbins', image: 'https://via.placeholder.com/150x220' },
];
 function BookDetails() {
  return (
    <div className="page-container">
      {/* Шапка сайта */}
      <header className="navbar">
        <div className="logo">📚 Book Store</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#store">Store</a>
        </nav>
        <div className="nav-actions">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="btn-primary">Account</button>
        </div>
      </header>

      {/* Фильтры жанров */}
      <div className="genres-filter">
        {genres.map((genre) => (
          <label key={genre} className="genre-item">
            <input type="checkbox" />
            <span>{genre}</span>
          </label>
        ))}
      </div>

      {/* Основная карточка книги */}
      <main className="book-main">
        <div className="book-cover">
          <img src="https://via.placeholder.com/250x380" alt="A promised land cover" />
        </div>
        <div className="book-info">
          <h1 className="book-title">A promised land</h1>
          <p className="book-author">Barack Obama</p>
          <p className="book-meta">Autobiography / Political memoir</p>
          <p className="book-date">November 17, 2020</p>
          <p className="book-price">Price: <strong>Rs. 2500</strong></p>
          <p className="book-status">Status: <span className="status-available">Available</span></p>
          
          <button className="btn-primary btn-add-cart">Add to Cart</button>
        </div>
      </main>

      {/* Описание книги */}
      <section className="section">
        <h3>Book Description</h3>
        <p className="description-text">
          A Promised Land is a memoir by Barack Obama, the 44th President of the United States from 2009 to 2017. 
          Published on November 17, 2020, it is the first of a planned two-volume series.
        </p>
      </section>

      {/* Рекомендации */}
      <section className="section">
        <h3>Most Relevant</h3>
        <div className="related-grid">
          {relatedBooks.map((book) => (
            <div key={book.id} className="related-card">
              <img src={book.image} alt={book.title} />
              <h4>{book.title}</h4>
              <p>{book.author}</p>
              <button className="btn-primary btn-sm">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Секция регистрации */}
      <section className="signup-banner">
        <h2>Sign Up For Our new collection</h2>
        <button className="btn-primary">Sign up</button>
      </section>

      {/* Подвал с подпиской */}
      <footer className="footer">
        <div className="subscribe-box">
          <h3>Subscribe to our offers</h3>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="logo">📚 Book Store</div>
          <div className="footer-links">
            <a href="#about">About Us</a>
            <a href="#policy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("bo"));
root.render(<BookDetails />);