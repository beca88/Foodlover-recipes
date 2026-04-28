import { createBrowserRouter, RouterProvider, useRouteError } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import SearchResults from "./components/pages/SearchResults";
import RecipeDetail from "./components/pages/RecipeDetail";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

// ── Recipe loader ───────────────────────────────────
async function fetchRecipeLoader({ params }) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
  );
  if (!res.ok) {
    throw new Response("Failed to load recipe", { status: 500 });
  }
  const data = await res.json();
  if (!data.meals) {
    throw new Response("Recipe not found", { status: 404 });
  }
  return data.meals[0];
}

// ── Error boundary ──────────────────────────────────
function RouteError() {
  const error = useRouteError();
  const message = error?.status === 404
    ? "Recipe not found. It may have been removed."
    : "Failed to load recipe. Please check your connection.";

  return (
    <div style={{ padding: "2rem" }}>
      <ErrorMessage message={message} />
    </div>
  );
}

// ── Router ──────────────────────────────────────────
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <RouteError />, // ← catches root level errors
    children: [
      { index: true, element: <Home /> },
      { path: "search", element: <SearchResults /> },
      {
        path: "recipe/:id",
        element: <RecipeDetail />,
        loader: fetchRecipeLoader,
        errorElement: <RouteError />
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}