import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <Outlet /> {/* renders the current page here */}
      </main>
      <Footer />
    </div>
  );
}