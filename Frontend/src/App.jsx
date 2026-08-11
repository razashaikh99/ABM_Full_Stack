import { BrowserRouter as Router } from "react-router-dom";
// import AppRouter from "./router";

// Common Components
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import TopBar from "./Components/Common/TopBar";
import Newsletter from "./Components/Common/Newsletter";
import CartSidebar from "./Components/Cart/CartSidebar";
import Loader from "./Components/Common/Loader";

// Toast Notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Styles
import "./Styles/Tailwind.css";
import AppRouter from "./AppRouter";

function App() {
  return (
    <Router>
      {/* 🔷 App Layout Wrapper */}
      <div className="min-h-screen flex flex-col bg-[var(--color-foreground)] text-[var(--color-accent)]">

        {/* 🔸 Header Section */}
        <TopBar />
        <Navbar />

        {/* 🔹 Page Routing */}
        <main className="flex-grow">
          <AppRouter />
        </main>

        {/* 🔸 Footer Section */}
        {/* <Newsletter /> */}
        <Footer />

        {/* 🔹 Global Components */}
        <CartSidebar />
        {/* <Loader /> */}

        {/* 🔸 Toast Notification Container */}
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </Router>
  );
}

export default App;
