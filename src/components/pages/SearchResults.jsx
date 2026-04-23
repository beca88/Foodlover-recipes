import { useEffect,useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function SearchResults() {
    const[dsearchParams]=useSearchParams();
    const query = searchParams.get("q");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


useEffect(() => {
    async function fetchMeals(){
        setLoading(true);
        const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        const data = await res.json();
    setMeals(data.meals || []);
    setLoading(false);
    }

      if (query) fetchMeals();
  }, [query]); // re-runs every time query changes
    
   
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