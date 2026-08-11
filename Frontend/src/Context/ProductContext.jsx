// src/Context/ProductContext.jsx
import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import products from "../Data/products";

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 20; // ✅ Pagination add ki hai

    // ✅ Initial load - useMemo se avoid unnecessary recalculations
    useEffect(() => {
        setAllProducts(products);
        setFilteredProducts(products);
    }, []);

    // ✅ Paginated products - useMemo se optimize
    const paginatedProducts = useMemo(() => {
        return filteredProducts.slice(0, currentPage * productsPerPage);
    }, [filteredProducts, currentPage]);

    // ✅ Load more products function
    const loadMoreProducts = useCallback(() => {
        setCurrentPage(prev => prev + 1);
    }, []);

    // ✅ Filter function ko useCallback se optimize
    const filterByCategory = useCallback((category) => {
        if (category === "all") {
            setFilteredProducts(allProducts);
        } else {
            setFilteredProducts(
                allProducts.filter((item) => item.category === category)
            );
        }
        setCurrentPage(1); // ✅ Filter karne pe page reset
    }, [allProducts]);

    // ✅ Sort function ko useCallback se optimize
    const sortProducts = useCallback((type) => {
        const sorted = [...filteredProducts];
        if (type === "price-asc") sorted.sort((a, b) => a.price - b.price);
        else if (type === "price-desc") sorted.sort((a, b) => b.price - a.price);
        setFilteredProducts(sorted);
    }, [filteredProducts]);

    // ✅ Get product by ID - useCallback se optimize
    const getProductById = useCallback((id) => {
        return allProducts.find(product => product.id === id);
    }, [allProducts]);

    // ✅ Context value ko useMemo se optimize
    const contextValue = useMemo(() => ({
        allProducts,
        filteredProducts: paginatedProducts, // ✅ Only paginated products return karein
        filterByCategory,
        sortProducts,
        getProductById,
        loadMoreProducts,
        hasMoreProducts: paginatedProducts.length < filteredProducts.length // ✅ Check if more products available
    }), [allProducts, paginatedProducts, filteredProducts, filterByCategory, sortProducts, getProductById, loadMoreProducts]);

    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    );
};