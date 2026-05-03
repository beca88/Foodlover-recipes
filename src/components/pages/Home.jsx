import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }

  function handleAreaClick(name) {
    navigate(`/search?q=${encodeURIComponent(name)}&type=area`);
  }

  function handleCategoryClick(name) {
    navigate(`/search?q=${encodeURIComponent(name)}&type=category`);
  }

  function handleIngredientClick(name) {
    navigate(`/search?q=${encodeURIComponent(name)}&type=ingredient`);
  }

  // ── Countries ───────────────────────────────────────
  const countries = [
    { name: "Chinese",  emoji: "🇨🇳" },
    { name: "Indian",   emoji: "🇮🇳" },
    { name: "Italian",  emoji: "🇮🇹" },
    { name: "Japanese", emoji: "🇯🇵" },
    { name: "Thai",     emoji: "🇹🇭" },
    { name: "British",  emoji: "🇬🇧" },
  ];

  // ── Ingredients ─────────────────────────────────────
  const ingredients = [
    { name: "Chicken", emoji: "🍗" },
    { name: "Pork",    emoji: "🍖" },
    { name: "Beef",    emoji: "🥩" },
    { name: "Lamb",    emoji: "🐑" },
    { name: "Salmon",  emoji: "🐟" },
    { name: "Bacon",   emoji: "🥓" },
  ];

  // ── Categories ──────────────────────────────────────
  const categories = [
    { name: "Breakfast",   emoji: "🍳" },
    { name: "Pasta",       emoji: "🍝" },
    { name: "Seafood",     emoji: "🦐" },
    { name: "Vegetarian",  emoji: "🥗" },
    { name: "Starter",     emoji: "🥙" },
    { name: "Side",        emoji: "🍚" },
  ];

  return (
    <div className="home">

      {/* ── Hero ──────────────────────────────────── */}
      <section className="hero">
        <h1 className="hero-title">
          Discover <span>Delicious</span> Recipes
        </h1>
        <p className="hero-tagline">
          Search from thousands of recipes around the world 🌍
        </p>

        <form onSubmit={handleSearch} className="hero-search-form">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a recipe e.g. Chicken..."
            className="hero-search-input"
          />
          <button type="submit" className="hero-search-btn">Search</button>
        </form>
      </section>

      {/* ── Browse by Country ───────────────────── */}
      <section className="browse-section">
        <div className="section-header">
          <h2 className="section-title">Browse by Country</h2>
          <span className="section-tag">Popular</span>
        </div>
        <div className="browse-grid">
          {countries.map((country) => (
            <div
              key={country.name}
              className="browse-card"
              onClick={() => handleAreaClick(country.name)}
            >
              <div className="browse-card-icon">{country.emoji}</div>
              <p className="browse-card-name">{country.name}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ── Browse by Ingredient ─────────────────── */}
      <section className="browse-section">
        <div className="section-header">
          <h2 className="section-title">Browse by Ingredient</h2>
          <span className="section-tag">Popular</span>
        </div>
        <div className="browse-grid">
          {ingredients.map((item) => (
            <div
              key={item.name}
              className="browse-card"
              onClick={() => handleIngredientClick(item.name)}
            >
              <div className="browse-card-icon">{item.emoji}</div>
              <p className="browse-card-name">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ── Browse by Category ───────────────────── */}
      <section className="browse-section">
        <div className="section-header">
          <h2 className="section-title">Browse by Category</h2>
          <span className="section-tag">Popular</span>
        </div>
        <div className="browse-grid">
          {categories.map((item) => (
            <div
              key={item.name}
              className="browse-card"
              onClick={() => handleCategoryClick(item.name)}
            >
              <div className="browse-card-icon">{item.emoji}</div>
              <p className="browse-card-name">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}