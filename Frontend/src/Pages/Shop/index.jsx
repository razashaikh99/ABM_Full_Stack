import useShopPage from "./index.function";
import ProductCard from "./components/ProductCard";
import FilterBar from "./components/FilterBar";
import SortDropdown from "./components/SortDropdown";

const Shop = () => {
    const {
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
        hasMoreProducts,
        handleSortChange,
        handleLoadMore,
        handleResetFilters
    } = useShopPage();

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-40">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
                    Our Products
                </h1>

                <div className="flex items-center gap-4">
                    <SortDropdown currentSort={sortOption} isOpen={sortOpen} handleSortSelect={handleSortChange} toggleDropdown={handleToggleSort} handleBlur={handleSortBlur} />
                </div>
            </div>

            <FilterBar filters={activeFilters} isOpen={filtersOpen} handleFilterChange={handleCategoryFilter} toggleFilters={handleToggleFilters} resetFilters={handleResetFilters} />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {displayedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>

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

            {displayedProducts.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-600 text-lg mb-4">
                        No products found. Try adjusting your filters.
                    </p>

                    <button
                        onClick={handleResetFilters}
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
