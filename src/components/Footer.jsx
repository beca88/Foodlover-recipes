export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Left - brand */}
        <p className="footer-brand">
          🍴 FoodLover Recipes
        </p>

        {/* Center - API credit */}
        <p className="footer-credit">
          Recipe data provided by{" "}
          
           <a href="https://www.themealdb.com"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            TheMealDB
          </a>
          {" "}— Free Recipe API
        </p>

        {/* Right - copyright */}
        <p className="footer-copy">
          © {year} FoodLover Recipes
        </p>

      </div>
    </footer>
  );
}