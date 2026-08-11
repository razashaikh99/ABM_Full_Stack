import { useState, useCallback, memo } from "react";
import { FaFilter, FaChevronDown } from "react-icons/fa";
import clsx from "clsx";

const FilterBar = ({ onFilterChange }) => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedPrice, setSelectedPrice] = useState("All");
    const [selectedRating, setSelectedRating] = useState("All");
    const [isOpen, setIsOpen] = useState(false);

    // ✅ Constants ko component se bahar rakhein (re-renders se bachega)
    const categories = ["All", "Cookware", "Drinkware", "Appliances", "Storage"];

    // ✅ useCallback se optimize karein
    const handleFilterChange = useCallback((type, value) => {
        let newCategory = selectedCategory;
        let newPrice = selectedPrice;
        let newRating = selectedRating;

        if (type === "category") {
            newCategory = value;
            setSelectedCategory(value);
        } else if (type === "price") {
            newPrice = value;
            setSelectedPrice(value);
        } else if (type === "rating") {
            newRating = value;
            setSelectedRating(value);
        }

        // ✅ Single call with all filter values
        onFilterChange({
            category: newCategory,
            price: newPrice,
            rating: newRating,
        });
    }, [selectedCategory, selectedPrice, selectedRating, onFilterChange]);

    // ✅ Toggle function optimize
    const toggleFilters = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    // ✅ Reset filters function
    const resetFilters = useCallback(() => {
        setSelectedCategory("All");
        setSelectedPrice("All");
        setSelectedRating("All");
        onFilterChange({ category: "All", price: "All", rating: "All" });
    }, [onFilterChange]);

    return (
        <div className="bg-white rounded-2xl shadow-md p-4 mb-6">
            {/* Mobile Toggle */}
            <div className="flex justify-between items-center md:hidden mb-3">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <FaFilter /> Filters
                </h2>
                <button
                    onClick={toggleFilters}
                    className="text-gray-600 hover:text-primary transition-colors"
                    aria-label="Toggle filters"
                >
                    <FaChevronDown
                        className={clsx("transition-transform duration-200", {
                            "rotate-180": isOpen,
                        })}
                    />
                </button>
            </div>

            {/* Desktop Title */}
            <div className="hidden md:flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <FaFilter /> Filters
                </h2>
                <button
                    onClick={resetFilters}
                    className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                    Reset All
                </button>
            </div>

            {/* Filters (Visible by default on Desktop) */}
            <div
                className={clsx("space-y-4", {
                    "hidden md:block": !isOpen,
                    "block": isOpen,
                })}
            >
                {/* Category Filter */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">
                        Category
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <FilterButton
                                key={cat}
                                label={cat}
                                isSelected={selectedCategory === cat}
                                onClick={() => handleFilterChange("category", cat)}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

// ✅ Separate memoized component for filter buttons
const FilterButton = memo(({ label, isSelected, onClick }) => (
    <button
        onClick={onClick}
        className={clsx(
            "px-3 py-1 rounded-full text-sm font-medium border transition-all duration-200",
            isSelected
                ? "bg-primary text-white border-primary shadow-sm"
                : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
        )}
    >
        {label}
    </button>
));

FilterButton.displayName = 'FilterButton';

export default memo(FilterBar);