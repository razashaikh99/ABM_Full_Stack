import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./Components/Navbar/index";
import Footer from "./Components/Footer/index";
import TopBar from "./Components/TopBar/index";
import CartSidebar from "./Components/CartSidebar/index";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import AppRouter from "./AppRouter";

function App() {
  return (
    <Router>

      <div className="min-h-screen flex flex-col bg-foreground text-accent">

        <TopBar />
        <Navbar />

        <main className="flex-grow">
          <AppRouter />
        </main>

        <Footer />

        <CartSidebar />

        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </Router>
  );
}

export default App;
