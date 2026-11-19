import Select from "../../../Components/Select";
import { shopSortOptions } from "../../../config";

export default function SortDropdown({ currentSort, handleSortSelect }) {
    return (
        <div className="flex items-center gap-2">
            <label htmlFor="product-sort" className="shrink-0 text-xs text-muted">
                Sort by
            </label>
            <Select
                variant="plain"
                id="product-sort"
                value={currentSort}
                onChange={(event) => handleSortSelect(event.target.value)}
               className="max-w-44 border-0 bg-surface px-3 py-2.5 text-sm text-primary"
            >
                {shopSortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Select>
        </div>
    );
}
