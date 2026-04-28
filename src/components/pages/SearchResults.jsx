import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    setError(null);

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
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
  }, [query]);

  if (loading) return <Spinner message="Searching for recipes..." />;
  if (error) return <ErrorMessage message={error} />;
  if (meals.length === 0) return (
    <p className="status-msg">😕 No recipes found for "{query}". Try a different keyword!</p>
  );

  return (
    <div className="results-page">
      <h2 className="results-title">Results for "{query}"</h2>
      <div className="results-grid">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="recipe-card"
            onClick={() => navigate(`/recipe/${meal.idMeal}`)}
          >
            <img src={meal.strMealThumb} alt={meal.strMeal} className="recipe-card-img" />
            <p className="recipe-card-name">{meal.strMeal}</p>
          </div>
        ))}
      </div>
    </div>
  );
}