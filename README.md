# 🍴 FoodLover Recipes

A modern Recipe Finder web application built with React and Vite. Users can search for recipes, browse by country, ingredient, and category, and view detailed recipe information including ingredients and step-by-step instructions.

---

## ✨ Features

- 🔍 Search recipes by keyword
- 🌍 Browse recipes by country, ingredient, and category
- 🎲 Random recipe suggestions on the home page
- 📖 Detailed recipe page with ingredients and step-by-step instructions
- ⚠️ Error handling for API failures and invalid routes
- ⏳ Loading spinner while data is being fetched
- 📱 Mobile-first responsive design

---

## 🛠️ Built With

- [React](https://react.dev/) — Frontend framework
- [Vite](https://vitejs.dev/) — Build tool
- [React Router v7](https://reactrouter.com/) — Client-side routing
- [TheMealDB API](https://www.themealdb.com/api.php) — Recipe data source
- CSS — Custom styling with mobile-first approach

---

## 📁 Project Structure

src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   ├── Spinner.jsx
│   ├── ErrorMessage.jsx
│   ├── RandomRecipe.jsx
│   ├── RecipeHeader.jsx
│   ├── IngredientList.jsx
│   └── InstructionList.jsx
├── pages/
│   ├── Home.jsx
│   ├── SearchResults.jsx
│   └── RecipeDetail.jsx
├── App.jsx
├── App.css
└── main.jsx

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- npm installed


## 🔗 API Reference

This app uses [TheMealDB](https://www.themealdb.com/api.php) — a free recipe API.
|
| `search.php?s={query}` | Search meals by name |
| `filter.php?a={area}` | Filter meals by country |
| `filter.php?c={category}` | Filter meals by category |
| `filter.php?i={ingredient}` | Filter meals by ingredient |
| `lookup.php?i={id}` | Get meal details by ID |
| `random.php` | Get a random meal |

---

## 📱 Responsive Design

The app follows a mobile-first approach with three breakpoints:

| Mobile (< 600px) | Single column, stacked layout |
| Tablet (≥ 600px) | Two columns, side by side detail |
| Desktop (≥ 900px) | Multi-column grid, full layout |

---

## ⚠️ Error Handling

| No search results | Friendly message displayed |
| Invalid recipe ID | 404 error message displayed |
| API connection failure | Error message with advice |
| Unknown URL | 404 page displayed |

---

## 📜 Credits

- Recipe data provided by [TheMealDB](https://www.themealdb.com)
- Hero image by [Rachel Park](https://unsplash.com/@rachelpark) on [Unsplash](https://unsplash.com)
- Fonts by [Google Fonts](https://fonts.google.com) — Pacifico, Playfair Display, Lato

---

## 👩‍💻 Author

**Beca**
Southern Institute of Technology — IT709 Web Applications