import { useState, useEffect, useMemo, useCallback } from "react";
import { products } from "../config/index";
import { ProductContext } from "./product.context";

export const ProductProvider = ({ children }) => {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 20;

    useEffect(() => {
        setAllProducts(products);
        setFilteredProducts(products);
    }, []);

    const paginatedProducts = useMemo(() => {
        return filteredProducts.slice(0, currentPage * productsPerPage);
    }, [filteredProducts, currentPage]);

    const loadMoreProducts = useCallback(() => {
        setCurrentPage(prev => prev + 1);
    }, []);

    const filterByCategory = useCallback((category) => {
        if (category === "all") {
            setFilteredProducts(allProducts);
        } else {
            setFilteredProducts(
                allProducts.filter((item) => item.category === category)
            );
        }
        setCurrentPage(1);
    }, [allProducts]);

    const sortProducts = useCallback((type) => {
        const sorted = [...filteredProducts];
        if (type === "price-asc") sorted.sort((a, b) => a.price - b.price);
        else if (type === "price-desc") sorted.sort((a, b) => b.price - a.price);
        setFilteredProducts(sorted);
    }, [filteredProducts]);

    const getProductById = useCallback((id) => {
        return allProducts.find(product => product.id === id);
    }, [allProducts]);

    const contextValue = useMemo(() => ({
        allProducts,
        filteredProducts: paginatedProducts,
        filterByCategory,
        sortProducts,
        getProductById,
        loadMoreProducts,
        hasMoreProducts: paginatedProducts.length < filteredProducts.length
    }), [allProducts, paginatedProducts, filteredProducts, filterByCategory, sortProducts, getProductById, loadMoreProducts]);

    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    );
};
