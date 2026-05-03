import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const type = searchParams.get("type");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    setError(null);

    // ── choose correct API based on type ──────────────
    const url = type === "area"
      ? `https://www.themealdb.com/api/json/v1/1/filter.php?a=${query}`
      : type === "category"
      ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`
      : type === "ingredient"
      ? `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`
      : `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch recipes");
        return res.json();
      })
      .then(data => {
        setMeals(data.meals ? data.meals : []);
      })
      .catch(err => {
        console.error("Error fetching recipes:", err);
        setError("Unable to fetch recipes. Please check your connection and try again.");
        setMeals([]);
      })
      .finally(() => setLoading(false));
  }, [query, type]); // ← type added to dependency array

  if (loading) return <Spinner message="Searching for recipes..." />;
  if (error) return <ErrorMessage message={error} />;
  if (meals.length === 0) return (
    <p className="status-msg">
      😕 No recipes found for "{query}". Try a different keyword!
    </p>
  );

  return (
    <div className="results-page">

      {/* ── Results title changes based on type ─────── */}
      <h2 className="results-title">
        {type === "area"
          ? `${query} Recipes`
          : type === "category"
          ? `${query} Recipes`
          : type === "ingredient"
          ? `Recipes with ${query}`
          : `Results for "${query}"`}
      </h2>

      <div className="results-grid">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="recipe-card"
            onClick={() => navigate(`/recipe/${meal.idMeal}`)}
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="recipe-card-img"
            />
            <p className="recipe-card-name">{meal.strMeal}</p>
          </div>
        ))}
      </div>
    </div>
  );
}