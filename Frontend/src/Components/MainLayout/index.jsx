import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import TopBar from "../TopBar/index";
import CartSidebar from "../CartSidebar/index";
import useMainLayout from "./index.function";

export default function MainLayout() {
    useMainLayout();

    return (
        <div className="flex min-h-screen flex-col bg-foreground">
            <Link
                reloadDocument
                to="#main-content"
               className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:p-4"
            >
                Skip to content
            </Link>

            <TopBar />

            <Navbar />

            <main id="main-content" className="flex-1" tabIndex={-1}>
                <Outlet />
            </main>

            <Footer />

            <CartSidebar />
        </div>
    );
}
