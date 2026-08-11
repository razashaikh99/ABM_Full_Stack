import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, paths }) => {
    return (
        <section className="w-full bg-gray-100 py-6 px-4">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between">
                {/* Page Title */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 sm:mb-0">{title}</h2>

                {/* Breadcrumb Navigation */}
                <nav className="text-sm text-gray-600">
                    {paths?.map((path, index) => (
                        <span key={index}>
                            {index !== paths.length - 1 ? (
                                <>
                                    <Link
                                        to={path.link}
                                        className="hover:text-blue-600 transition-colors duration-200"
                                    >
                                        {path.name}
                                    </Link>
                                    <span className="mx-2 text-gray-400">/</span>
                                </>
                            ) : (
                                <span className="text-gray-800 font-medium">{path.name}</span>
                            )}
                        </span>
                    ))}
                </nav>
            </div>
        </section>
    );
};

export default Breadcrumb;
