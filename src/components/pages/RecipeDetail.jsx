import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function RecipeDetail() {
  const { id } = useParams(); // gets the :id from the URL
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMeal() {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      setMeal(data.meals[0]);
      setLoading(false);
    }

    fetchMeal();
  }, [id]);

  if (loading) return <p className="status-msg">Loading recipe...</p>;
  if (!meal) return <p className="status-msg">Recipe not found.</p>;

  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="detail-inner">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="detail-img" />
        <div className="detail-info">
          <h1 className="detail-title">{meal.strMeal}</h1>
          <p className="detail-meta">{meal.strCategory} — {meal.strArea}</p>
          <h3>Instructions</h3>
          <p className="detail-instructions">{meal.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}