
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
     <div className="store-container" id="home">
       <header className="navbar">
         <a className="logo" href="#home">🟠 Book Haven</a>
         <nav className="nav-menu" aria-label="Main navigation">
           <a href="#home">Home</a>
           <a href="#about">About</a>
           <a href="#book">Book</a>
         </nav>
         <div className="search-bar" role="search">
           <input type="search" aria-label="Search books" placeholder="Search books..." />
         </div>
         <div className="nav-right">
           <span className="account">Account</span>
           <span className="cart-icon">🛒</span>
         </div>
       </header>

       <section className="filter-section" aria-label="Filter books by genre">
         {genres.map((genre, idx) => (
           <label key={idx} className="checkbox-label">
             <input type="checkbox" />
            <span>{genre}</span>
          </label>
        ))}
      </section>

      <main>
        <section className="page-intro" aria-labelledby="page-title">
          <h1 id="page-title">Discover your next favorite book</h1>
          <p>Explore a handpicked collection of books across popular genres, from fiction and fantasy to history and mystery.</p>
        </section>

        <section id="book" className="books-grid" aria-label="Featured books">
          {books.map((book) => (
            <article key={book.id} className="book-card">
              <img
                src={book.img}
                alt={`Cover of ${book.title} by ${book.author}`}
                loading={book.id === 1 ? 'eager' : 'lazy'}
                decoding="async"
              />
              <h2 className="book-title">{book.title}</h2>
              <p className="book-author">by {book.author}</p>
              <button className="btn-add-cart" type="button">Add to Cart</button>
            </article>
          ))}
        </section>
      </main>

      <section id="about" className="signup-banner" aria-labelledby="signup-title">
        <h2 id="signup-title">Sign up for our new collection</h2>
        <button className="btn-signup" type="button">Sign Up</button>
      </section>

      <footer className="footer">
        <section className="newsletter-section" aria-labelledby="newsletter-title">
          <h2 id="newsletter-title">Subscribe to our latest offers</h2>
          <div className="newsletter-box">
            <input type="email" aria-label="Email address" placeholder="Enter your email" />
            <button className="btn-subscribe" type="button">Subscribe</button>
          </div>
        </section>

        <div className="footer-links-row">
          <a className="footer-logo" href="#home">🟠 Book Haven</a>
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
            <option value="en">English</option>
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