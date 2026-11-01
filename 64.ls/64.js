
    const genres = [
  'Romance', 'Sci-Fiction', 'Fantasy', 'Fiction', 'History', 
  'Horror', 'Thriller', 'Mystery', 'Magazine', 'Child-Books', 'Comedy'
];

const books = [
  { id: 1, title: 'The Grammar of English Grammars', author: 'Goold Brown', img: 'https://i.postimg.cc/76GMRfyz/Taras-Shevchenko-selfportrait-oil-1840.jpg' },
  { id: 2, title: 'Start with why', author: 'Simon Sinek', img: 'https://i.postimg.cc/qRy6nnTb/44cb77ebf2b5d2f83da31537769363bf.jpg' },
  { id: 3, title: 'May it please the court', author: 'Daniel Maldonado', img: 'https://i.postimg.cc/hvRyb97M/pngtree-pile-of-books-children-s-book-illustration-style-png-image-15788569.png' },
  { id: 4, title: 'The half-known life', author: 'Ryan Lindner', img: 'https://i.postimg.cc/KzCz9YZr/Books.jpg' },
  { id: 5, title: 'Russian brides', author: 'Hugh Macnab', img: 'https://i.postimg.cc/y8n8Mj1N/none-283456874.jpg' },
  { id: 6, title: 'The lean startup', author: 'Eric Ries', img: 'https://i.postimg.cc/QdNXJ7p0/images-2.jpg' },
  { id: 7, title: 'To kill a mocking bird', author: 'Harper Lee', img: 'https://i.postimg.cc/d1CvVjYC/images-3.jpg' },
  { id: 8, title: 'The $100 startup', author: 'Chris Guillebeau', img: 'https://i.postimg.cc/SxHvxFNt/IMG-dadc3a66bd8f22702afdea4f4f3e655f-V.jpg' },
  { id: 9, title: 'Zero to one', author: 'Peter Thiel', img: 'https://i.postimg.cc/SNJd2T50/foni-papik-pro-76i6-p-kartinki-raskritaya-kniga-na-prozrachnom-f-3.png' },
  { id: 10, title: 'Snowbound', author: 'Janice Leonard', img: 'https://i.postimg.cc/JhqZdZgy/Depositphotos-178305.jpg' }
];

 function App() {
  return (
    <div className="store-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">🟠 Book Haven</div>
        <nav className="nav-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#book">Book</a>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="nav-right">
          <span className="account">Account</span>
          <span className="cart-icon">🛒</span>
        </div>
      </header>

      {/* Checkboxes Filters */}
      <section className="filter-section">
        {genres.map((genre, idx) => (
          <label key={idx} className="checkbox-label">
            <input type="checkbox" />
            <span>{genre}</span>
          </label>
        ))}
      </section>

      {/* Books Grid */}
      <main className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.img} alt={book.title} />
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">{book.author}</p>
            <button className="btn-add-cart">Add to Cart</button>
          </div>
        ))}
      </main>

      {/* Banner Sign Up */}
      <section className="signup-banner">
        <h2>Sign up for our new collection</h2>
        <button className="btn-signup">Sign Up</button>
      </section>

      {/* Footer Newsletter & Links */}
      <footer className="footer">
        <div className="newsletter-section">
          <h3>Subscribe our new offers !</h3>
          <div className="newsletter-box">
            <input type="email" placeholder="📧 Read your email" />
            <button className="btn-subscribe">Subscribe</button>
          </div>
        </div>

        <div className="footer-links-row">
          <div className="footer-logo">🟠 Book Haven</div>
          <div className="footer-links">
            <a href="#pricing">Pricing</a>
            <a href="#about">About us</a>
            <a href="#features">Features</a>
            <a href="#help">Help Center</a>
            <a href="#contact">Contact us</a>
            <a href="#faqs">FAQS</a>
            <a href="#careers">Careers</a>
          </div>
        </div>



        <div className="footer-bottom">
          <select className="lang-select">
            <option>English</option>
          </select>
          <p className="copyright">©2026 Brand Inc. — Privacy — Terms — Sitemap</p>
          <div className="social-icons">
            <span>🐦</span>
            <span>📷</span>
            <span>💼</span>
            <span>▶️</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("bo"));
root.render(<App />);