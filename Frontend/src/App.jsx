import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AppRouter from "./AppRouter";

export default function App() {
    return (
        <BrowserRouter>
            <AppRouter />

            <ToastContainer position="top-right" autoClose={3500} />
        </BrowserRouter>
    );
}
