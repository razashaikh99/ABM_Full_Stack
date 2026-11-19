import Checkbox from "../../../Components/Checkbox";
import Select from "../../../Components/Select";
import Button from "../../../Components/Button";
import { shopCategories, priceFilters, ratingFilters } from "../../../config";

export default function FilterBar({ filters, isOpen, handleFilterChange, resetFilters }) {
    return (
        <div
            id="shop-filters"
           className={(isOpen ? "block" : "hidden") + " border-b border-line pb-6 lg:block lg:border-0"}
        >
            <div className="mb-7 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-primary">Refine by</h2>
                <Button onClick={resetFilters} variant="plain" className="text-xs text-muted underline underline-offset-4">
                    Clear all
                </Button>
            </div>
            <fieldset className="mb-8">
                <legend className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                    Category
                </legend>
                <div className="space-y-3">
                    {shopCategories.map((category) => (
                        <Checkbox
                            key={category}
                            type="radio"
                            name="category"
                            value={category}
                            checked={filters.category.toLowerCase() === category.toLowerCase()}
                            onChange={() => handleFilterChange("category", category)}
                            label={category === "All" ? "All essentials" : category}
                        />
                    ))}
                </div>
            </fieldset>
            <fieldset className="mb-8">
                <legend className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                    Price range · PKR
                </legend>
                <div className="space-y-3">
                    {priceFilters.map((price) => (
                        <Checkbox
                            key={price}
                            type="radio"
                            name="price"
                            checked={filters.price === price}
                            onChange={() => handleFilterChange("price", price)}
                            label={price === "All" ? "Any price" : price}
                        />
                    ))}
                </div>
            </fieldset>
            <Select
                label="Customer rating"
                id="rating"
                value={filters.rating}
                onChange={(event) => handleFilterChange("rating", event.target.value)}
            >
                {ratingFilters.map((rating) => (
                    <option key={rating} value={rating}>
                        {rating === "All" ? "All ratings" : rating}
                    </option>
                ))}
            </Select>
        </div>
    );
}
