import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

export default function RandomRecipe() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // ── call API 4 times simultaneously ──────────────
    Promise.all([
      fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(res => res.json()),
      fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(res => res.json()),
      fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(res => res.json()),
      fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(res => res.json()),
    ])
      .then(([data1, data2, data3, data4]) => {
        setMeals([data1.meals[0], data2.meals[0], data3.meals[0], data4.meals[0]]);
      })
      .catch(err => console.error("Failed to fetch random recipes:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <section className="random-section">
      <div className="section-header">
        <h2 className="section-title">Try Some New Recipes Today!</h2>
        <span className="section-tag">Random</span>
      </div>
      <Spinner message="Finding recipes for you..." />
    </section>
  );

  if (meals.length === 0) return null;

  return (
    <section className="random-section">

      {/* ── Section header ───────────────────────── */}
      <div className="section-header">
        <h2 className="section-title">Try Some New Recipes Today!</h2>
        <span className="section-tag">Random</span>
      </div>

      {/* ── 4 recipe cards ───────────────────────── */}
      <div className="random-grid">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="random-card"
            onClick={() => navigate(`/recipe/${meal.idMeal}`)}
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="random-card-img"
            />
            <div className="random-card-info">
              <p className="random-card-name">{meal.strMeal}</p>
              <p className="random-card-meta">
                {meal.strCategory} · {meal.strArea}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}