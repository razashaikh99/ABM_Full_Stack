import { memo } from "react";
import { FaChevronDown } from "react-icons/fa";
import clsx from "clsx";
import { shopSortOptions as sortOptions } from "../../../config/index";

const SortDropdown = ({ currentSort, isOpen, handleSortSelect, toggleDropdown, handleBlur }) => {
    const currentOption = sortOptions.find(option => option.value === currentSort) || sortOptions[0];

    return (
        <div className="relative inline-block text-left w-full sm:w-auto" onBlur={handleBlur}>
            <button
                onClick={toggleDropdown}
                className="flex justify-between items-center w-full sm:w-56 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <span>{currentOption.label}</span>
                <FaChevronDown
                    className={clsx("transition-transform duration-200", {
                        "rotate-180": isOpen,
                    })}
                />
            </button>

            {isOpen && (
                <div className="absolute right-0 z-20 mt-2 w-full sm:w-56 origin-top-right bg-white border border-gray-200 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <ul className="py-1 max-h-60 overflow-auto">
                        {sortOptions.map((option) => (
                            <SortOption
                                key={option.value}
                                option={option}
                                isSelected={currentSort === option.value}
                                onSelect={handleSortSelect}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const SortOption = memo(({ option, isSelected, onSelect }) => (
    <li>
        <button
            onClick={() => onSelect(option.value)}
            className={clsx(
                "block w-full text-left px-4 py-2 text-sm transition-colors duration-150",
                isSelected
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
            )}
        >
            {option.label}
        </button>
    </li>
));

SortOption.displayName = 'SortOption';

export default memo(SortDropdown);
