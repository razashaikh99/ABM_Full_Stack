import { useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { useCart } from "../../Hooks/useCart";
import { toast } from "react-toastify";
import { catalogProducts as allProducts, defaultShopFilters, shopSettings } from "../../config/index";

export default function useShopPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get("q") || "";

    const category = searchParams.get("category") || "All";

    const { addToCart } = useCart();

    const handleAddToCart = (product) => {
        addToCart(product);

        toast.success(`${product.name} added to cart!`);
    };

    const [sortOption, setSortOption] = useState(shopSettings.defaultSort);

    const [filterSettings, setFilterSettings] = useState(defaultShopFilters);

    const activeFilters = useMemo(() => ({ ...filterSettings, category }), [filterSettings, category]);

    const [currentPage, setCurrentPage] = useState(1);

    const matchingProducts = useMemo(() => {
        const filtered = allProducts.filter((product) => {
            if (query && !(product.name + " " + product.category).toLowerCase().includes(query.toLowerCase()))
                return false;

            if (
                activeFilters.category !== "All" &&
                product.category.toLowerCase() !== activeFilters.category.toLowerCase()
            )
                return false;

            if (activeFilters.price === "Under 1000" && product.price >= 1000) return false;

            if (activeFilters.price === "1000 - 5000" && (product.price < 1000 || product.price > 5000))
                return false;

            if (activeFilters.price === "5000+" && product.price <= 5000) return false;

            if (
                activeFilters.rating !== "All" &&
                (product.rating || 0) < (activeFilters.rating === "4★ & above" ? 4 : 3)
            )
                return false;

            return true;
        });

        switch (sortOption) {
            case "priceLowHigh":
                return filtered.sort((a, b) => a.price - b.price);
            case "priceHighLow":
                return filtered.sort((a, b) => b.price - a.price);
            case "rating":
                return filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
            default:
                return filtered;
        }
    }, [activeFilters, sortOption, query]);

    const displayedProducts = matchingProducts.slice(0, currentPage * shopSettings.productsPerPage);

    const [filtersOpen, setFiltersOpen] = useState(false);

    const handleToggleFilters = () => setFiltersOpen((value) => !value);

    const handleCategoryFilter = (type, value) => {
        handleFilterChange({ ...activeFilters, [type]: value });
    };

    const handleFilterChange = (filters) => {
        setFilterSettings(filters);

        setSearchParams((previous) => {
            if (filters.category === "All") previous.delete("category");
            else previous.set("category", filters.category);
            return previous;
        });

        setCurrentPage(1);
    };

    const handleSortChange = (option) => {
        setSortOption(option);

        setCurrentPage(1);
    };

    const handleLoadMore = () => setCurrentPage((page) => page + 1);

    const handleResetFilters = () => {
        setFilterSettings(defaultShopFilters);
        setSearchParams({});
        setCurrentPage(1);
    };

    return {
        filtersOpen,
        handleToggleFilters,
        handleCategoryFilter,
        sortOption,
        handleAddToCart,
        activeFilters,
        displayedProducts,
        totalResults: matchingProducts.length,
        query,
        hasMoreProducts: displayedProducts.length < matchingProducts.length,
        handleFilterChange,
        handleSortChange,
        handleLoadMore,
        handleResetFilters,
    };
}
