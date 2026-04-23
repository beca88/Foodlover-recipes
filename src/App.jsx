import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchResults from "./components/pages/SearchResults";
import RecipeDetail from "./components/pages/RecipeDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<h1>Welcome to FoodLover Recipe</h1>} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;