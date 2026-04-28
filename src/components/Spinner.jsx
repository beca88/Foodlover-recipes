export default function Spinner({ message = "Loading..." }) {
  return (
    <div className="spinner-wrapper">
      <div className="spinner" />
      <p className="spinner-msg">{message}</p>
    </div>
  );
}