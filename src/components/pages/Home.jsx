export default function Home() {
 const areas = [
  { name: "Asian", emoji: "🍜" },
  { name: "Italian", emoji: "🍕" }, 
  { name: "Japanese", emoji: "🍣" },
  { name: "Western", emoji: "🥩" },
];

const ingredients = [
  { name: "Beef", emoji: "🥩" },
  { name: "Chicken", emoji: "🍗" },  
  { name: "Pork", emoji: "🍖" },
  { name: "Seafood", emoji: "🦐" },
];
  

  const vegetarian = [
    { name: "Salad", emoji: "🥗" },
    { name: "Soup", emoji: "🍲" },
    { name: "Pasta", emoji: "🍝" },
  ];

  return (
    <div className="home">

      {/* ── Greeting / Hero ─────────────────────────── */}
      <section className="hero">
        <h1 className="hero-title">Welcome to FoodLover Recipes!</h1>
        <p className="hero-tagline">
          Discover delicious recipes from around the world 🌍
        </p>
      </section>

      {/* ── Browse by Area ──────────────────────────── */}
      <section className="browse-section">
        <div className="section-header">
          <h2 className="section-title">Browse by Area</h2>
          <span className="section-tag">Country · Popular</span>
        </div>
        <div className="browse-grid">
          {areas.map((area) => (
            <div key={area.name} className="browse-card">
              <div className="browse-card-icon">{area.emoji}</div>
              <p className="browse-card-name">{area.name}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ── Browse by Ingredient ────────────────────── */}
      <section className="browse-section">
        <div className="section-header">
          <h2 className="section-title">Browse by Ingredient</h2>
          <span className="section-tag">Meat</span>
        </div>
        <div className="browse-grid">
          {ingredients.map((item) => (
            <div key={item.name} className="browse-card">
              <div className="browse-card-icon">{item.emoji}</div>
              <p className="browse-card-name">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ── Browse by Meal Type ────────────────────── */}
      <section className="browse-section">
        <div className="section-header">
          <h2 className="section-title">Browse by Meal Type</h2>
          <span className="section-tag">Popular</span>
        </div>
        <div className="browse-grid">
          {vegetarian.map((item) => (
            <div key={item.name} className="browse-card">
              <div className="browse-card-icon">{item.emoji}</div>
              <p className="browse-card-name">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}