export default function ErrorMessage({ message = "Something went wrong. Please try again." }) {
  return (
    <div className="error-wrapper">
      <span className="error-icon">⚠️</span>
      <p className="error-msg">{message}</p>
    </div>
  );
}