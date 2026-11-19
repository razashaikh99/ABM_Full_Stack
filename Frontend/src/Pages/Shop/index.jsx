import Button from "../../Components/Button";
import { SlidersHorizontal } from "lucide-react";
import useShopPage from "./index.function";
import Breadcrumb from "../../Components/Breadcrumb/index";
import ProductCard from "../../Components/ProductCard/index";
import FilterBar from "./components/FilterBar";
import SortDropdown from "./components/SortDropdown";

export default function Shop() {
    const {
        filtersOpen,
        handleToggleFilters,
        handleCategoryFilter,
        sortOption,
        handleAddToCart,
        activeFilters,
        displayedProducts,
        hasMoreProducts,
        handleSortChange,
        handleLoadMore,
        handleResetFilters,
        totalResults,
        query,
    } = useShopPage();

    return (
        <div className="page-width pb-20">
            <Breadcrumb title="The collection" />

            <div className="mb-10 border-b border-line pb-10 pt-3">
                <p className="eyebrow mb-4">MADE FOR YOUR EVERYDAY</p>
                <h1 className="display-title mb-5">
                    {query ? "Your search, considered." : "A little something for home."}
                </h1>
                <p className="max-w-xl text-sm leading-6 sm:leading-7 text-muted">
                    {query
                        ? "Showing results for “" + query + "”"
                        : "Useful finds. Thoughtful details. Explore the kitchen and home essentials you’ll reach for every day."}
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[210px_1fr] lg:gap-12">
                <aside>
                    <Button
                        variant="outline"
                       className="mb-4 w-full justify-between lg:hidden"
                        onClick={handleToggleFilters}
                        aria-expanded={filtersOpen}
                        aria-controls="shop-filters"
                    >
                        <span>Refine your selection</span>
                        <SlidersHorizontal size={17} />
                    </Button>
                    <FilterBar
                        filters={activeFilters}
                        isOpen={filtersOpen}
                        handleFilterChange={handleCategoryFilter}
                        resetFilters={handleResetFilters}
                    />
                </aside>

                <section aria-label="Products">
                    <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
                        <p className="text-sm text-muted">
                            {totalResults} {totalResults === 1 ? "essential" : "essentials"}
                        </p>
                        <SortDropdown currentSort={sortOption} handleSortSelect={handleSortChange} />
                    </div>

                    {displayedProducts.length ? (
                        <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 xl:grid-cols-3">
                            {displayedProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onAddToCart={handleAddToCart}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="border-y border-line py-16 text-center">
                            <h2 className="mb-3 font-display text-3xl text-primary">
                                Nothing here, just yet.
                            </h2>
                            <p className="mb-6 text-sm text-muted">
                                Try a different search or give your filters a fresh start.
                            </p>
                            <Button variant="outline" onClick={handleResetFilters}>
                                Reset search & filters
                            </Button>
                        </div>
                    )}

                    {hasMoreProducts && (
                        <div className="mt-12 text-center">
                            <Button variant="outline" onClick={handleLoadMore}>
                                Discover more
                            </Button>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}
