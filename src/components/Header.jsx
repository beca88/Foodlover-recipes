import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (query.trim()) {
     navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <header className="header">
      <div className="header-inner">

        {/* Logo - left */}
        <a href="/" className="logo">
          <span className="logo-text">Foodlover Recipes</span>
        </a>

        {/* Nav - right */}
        <nav className="nav">
          <a href="/" className="nav-link nav-link--home">Home</a>

          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="search-input"
            />
            <button type="submit" className="search-btn">→</button>
          </form>
        </nav>

      </div>
    </header>
  );
}