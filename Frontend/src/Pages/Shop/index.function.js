import { useMemo, useState } from "react";
import { useCart } from "../../Hooks/useCart";
import { toast } from "react-toastify";
import { useProducts } from "../../Hooks/useProducts";
import { defaultShopFilters, shopSettings } from "../../config/index";

export default function useShopPage() {
    const { addToCart } = useCart();

    const handleAddToCart = product => {
        addToCart(product);

        toast.success(`${product.name} added to cart!`);
    };

    const { allProducts } = useProducts();

    const [sortOption, setSortOption] = useState(shopSettings.defaultSort);

    const [activeFilters, setActiveFilters] = useState(defaultShopFilters);

    const [currentPage, setCurrentPage] = useState(1);

    const matchingProducts = useMemo(() => {

        const filtered = allProducts.filter(product => {

            if (activeFilters.category !== "All" && product.category.toLowerCase() !== activeFilters.category.toLowerCase()) return false;

            if (activeFilters.price === "Under 1000" && product.price >= 1000) return false;

            if (activeFilters.price === "1000 - 5000" && (product.price < 1000 || product.price > 5000)) return false;

            if (activeFilters.price === "5000+" && product.price <= 5000) return false;

            if (activeFilters.rating !== "All" && product.rating < (activeFilters.rating === "4★ & above" ? 4 : 3)) return false;

            return true;
        });

        switch (sortOption) {
            case "priceLowHigh": return filtered.sort((a, b) => a.price - b.price);
            case "priceHighLow": return filtered.sort((a, b) => b.price - a.price);
            case "newest": return filtered.sort((a, b) => new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0));
            case "oldest": return filtered.sort((a, b) => new Date(a.dateAdded || 0) - new Date(b.dateAdded || 0));
            case "rating": return filtered.sort((a, b) => b.rating - a.rating);
            default: return filtered;
        }
    }, [allProducts, activeFilters, sortOption]);

    const displayedProducts = matchingProducts.slice(0, currentPage * shopSettings.productsPerPage);

    const [filtersOpen, setFiltersOpen] = useState(false);

    const [sortOpen, setSortOpen] = useState(false);

    const handleToggleFilters = () => setFiltersOpen(value => !value);

    const handleToggleSort = () => setSortOpen(value => !value);

    const handleSortBlur = event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setSortOpen(false);
    };

    const handleCategoryFilter = (type, value) => {
        handleFilterChange({ ...activeFilters, [type]: value });
    };

    const handleFilterChange = filters => {

        setActiveFilters(filters);

        setCurrentPage(1); };

    const handleSortChange = option => {

        setSortOption(option);

        setSortOpen(false);

        setCurrentPage(1); };

    const handleLoadMore = () => setCurrentPage(page => page + 1);

    const handleResetFilters = () => handleFilterChange(defaultShopFilters);

    return {
        filtersOpen,
        sortOpen,
        handleToggleFilters,
        handleToggleSort,
        handleSortBlur,
        handleCategoryFilter,
        sortOption,
        handleAddToCart,
        activeFilters,
        displayedProducts,
        hasMoreProducts: displayedProducts.length < matchingProducts.length,
        handleFilterChange,
        handleSortChange,
        handleLoadMore,
        handleResetFilters
    };
}
