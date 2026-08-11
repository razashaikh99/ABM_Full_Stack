import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <div className="bg-primary text-foreground flex flex-col items-center justify-center text-center px-4 py-40">
            <h1 className="text-8xl font-extrabold mb-4 text-secondary">404</h1>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
                Oops! Page Not Found
            </h2>
            <p className="mb-6 text-lg text-foreground">
                The page you are looking for might have been removed or is temporarily unavailable.
            </p>
            <Link to="/">
                <button className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-secondary text-white font-medium hover:bg-orange-500 transition duration-300 ease-out text-sm sm:text-base px-4 cursor-pointer">
                    Go Back to Home
                </button>
            </Link>
        </div>
    );
}
