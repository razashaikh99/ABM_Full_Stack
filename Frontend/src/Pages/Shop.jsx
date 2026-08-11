// src/Pages/Shop.jsx
import React, { useState, useMemo, useCallback } from "react";
import ProductCard from "../Components/Shop/ProductCard";
import FilterBar from "../Components/Shop/FilterBar";
import SortDropdown from "../Components/Shop/SortDropdown";
import { useProducts } from "../Context/ProductContext";

const Shop = () => {
    const [sortOption, setSortOption] = useState("default");
    const [activeFilters, setActiveFilters] = useState({
        category: "All",
        price: "All",
        rating: "All"
    });

    const {
        filteredProducts,
        filterByCategory,
        sortProducts,
        loadMoreProducts,
        hasMoreProducts
    } = useProducts();

    // ✅ Apply filters to products - useCallback se optimize
    const applyFilters = useCallback((products, filters) => {
        return products.filter(product => {
            // Category filter
            if (filters.category !== "All" && product.category !== filters.category.toLowerCase()) {
                return false;
            }

            // Price filter
            if (filters.price !== "All") {
                if (filters.price === "Under 1000" && product.price >= 1000) return false;
                if (filters.price === "1000 - 5000" && (product.price < 1000 || product.price > 5000)) return false;
                if (filters.price === "5000+" && product.price <= 5000) return false;
            }

            // Rating filter
            if (filters.rating !== "All") {
                const minRating = filters.rating === "4★ & above" ? 4 : 3;
                if (product.rating < minRating) return false;
            }

            return true;
        });
    }, []);

    // ✅ Optimized filtered and sorted products - useMemo se optimize
    const displayedProducts = useMemo(() => {
        let filtered = applyFilters(filteredProducts, activeFilters);

        // Apply sorting
        switch (sortOption) {
            case "priceLowHigh":
                return [...filtered].sort((a, b) => a.price - b.price);
            case "priceHighLow":
                return [...filtered].sort((a, b) => b.price - a.price);
            case "newest":
                return [...filtered].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
            case "oldest":
                return [...filtered].sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
            case "rating":
                return [...filtered].sort((a, b) => b.rating - a.rating);
            default:
                return filtered;
        }
    }, [filteredProducts, activeFilters, sortOption, applyFilters]);

    // ✅ Filter handler - useCallback se optimize
    const handleFilterChange = useCallback((filters) => {
        setActiveFilters(filters);

        // Update context category filter
        if (filters.category !== "All") {
            filterByCategory(filters.category.toLowerCase());
        } else {
            filterByCategory("all");
        }
    }, [filterByCategory]);

    // ✅ Sort handler - useCallback se optimize
    const handleSortChange = useCallback((option) => {
        setSortOption(option);

        // Context sorting for price only
        if (option === "priceLowHigh") {
            sortProducts("price-asc");
        } else if (option === "priceHighLow") {
            sortProducts("price-desc");
        }
        // "newest", "oldest", "rating" client-side handle ho rahe hain
    }, [sortProducts]);

    // ✅ Load more handler - useCallback se optimize
    const handleLoadMore = useCallback(() => {
        loadMoreProducts();
    }, [loadMoreProducts]);

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-40">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
                    Our Products
                </h1>
                <div className="flex items-center gap-4">
                    <SortDropdown onSortChange={handleSortChange} currentSort={sortOption} />
                </div>
            </div>

            {/* Filters */}
            <FilterBar onFilterChange={handleFilterChange} />

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {displayedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

            {/* Load More Button */}
            {hasMoreProducts && displayedProducts.length > 0 && (
                <div className="text-center mt-12">
                    <button
                        onClick={handleLoadMore}
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Load More Products
                    </button>
                </div>
            )}

            {/* Empty state */}
            {displayedProducts.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-600 text-lg mb-4">
                        No products found. Try adjusting your filters.
                    </p>
                    <button
                        onClick={() => handleFilterChange({ category: "All", price: "All", rating: "All" })}
                        className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                        Reset All Filters
                    </button>
                </div>
            )}

            
        </div>
    );
};

export default Shop;