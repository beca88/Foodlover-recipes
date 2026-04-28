import { useLoaderData, useNavigate } from "react-router-dom";

export default function RecipeDetail() {
  const meal = useLoaderData();
  const navigate = useNavigate();

  // ── Build ingredients list ──────────────────────────
  const ingredients = Array.from({ length: 20 }, (_, i) => i + 1)
    .map(i => ({
      ingredient: meal[`strIngredient${i}`],
      measure: meal[`strMeasure${i}`],
    }))
    .filter(item => item.ingredient && item.ingredient.trim() !== "");

  // ── Split instructions into steps by line break ─────
  const steps = meal.strInstructions
    .split(/\r\n|\n|\r/)             // split by line breaks
    .map(step => step.trim())        // remove extra spaces
    .filter(step => step.length > 0); // remove empty lines

  return (
    <div className="detail-page">

      {/* ── Back button ─────────────────────────── */}
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      {/* ── Top section: image + ingredients ────── */}
      <div className="detail-inner">

        {/* Left: image */}
        <div className="detail-img-wrapper">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="detail-img"
          />
        </div>

        {/* Right: name + meta + ingredients */}
        <div className="detail-info">
          <h1 className="detail-title">{meal.strMeal}</h1>
          <p className="detail-meta">Category - {meal.strCategory}</p>
           <p className="detail-meta">Area - {meal.strArea}</p>
          <h2 className="detail-section-title">Ingredients</h2>
          <ul className="ingredients-list">
            {ingredients.map((item, index) => (
              <li key={index} className="ingredient-item">
                <span className="ingredient-measure">{item.measure}</span>
                <span className="ingredient-name">{item.ingredient}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* ── Instructions - full width below ─────── */}
      <div className="detail-instructions-section">
        <h2 className="detail-section-title">Instructions</h2>
        <ol className="instructions-list">
          {steps.map((step, index) => (
            <li key={index} className="instruction-step">
        
              <p className="step-text">{step}</p>
            </li>
          ))}
        </ol>
      </div>

    </div>
  );
}