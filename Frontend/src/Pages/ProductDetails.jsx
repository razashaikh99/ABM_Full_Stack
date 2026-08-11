// src/Pages/ProductDetails.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import productsData from "../Data/products";
import { formatCurrency } from "../Utils/formatCurrency";
import { toast } from "react-toastify";

const ProductDetails = () => {
    const { id } = useParams();
    const product = productsData.find((p) => p.id === id);

    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return (
            <div className="flex items-center justify-center h-screen text-gray-700 text-xl">
                Product not found!
            </div>
        );
    }

    const handleAddToCart = () => {
        toast.success(`${product.name} added to cart!`);
    };

    // function to render star ratings
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) stars.push(<FaStar key={i} className="text-yellow-400" />);
            else if (rating >= i - 0.5)
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
            else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
        }
        return stars;
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left: Product Image */}
            <div className="flex items-center justify-center bg-white p-6 rounded-2xl shadow-md">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full max-w-md object-cover rounded-lg"
                />
            </div>

            {/* Right: Product Details */}
            <div className="space-y-5">
                <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                    {renderStars(product.rating)}
                    <span className="text-sm text-gray-600">({product.rating})</span>
                </div>

                {/* Price */}
                <p className="text-2xl font-semibold text-primary">
                    {formatCurrency(product.price)}
                </p>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                    {product.description || "This is a high-quality kitchenware item, perfect for your daily cooking needs."}
                </p>

                {/* Quantity */}
                <div className="flex items-center space-x-4">
                    <span className="text-gray-700 font-medium">Quantity:</span>
                    <div className="flex items-center border rounded-lg">
                        <button
                            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-l-lg"
                        >
                            -
                        </button>
                        <span className="px-4">{quantity}</span>
                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-r-lg"
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={handleAddToCart}
                        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition font-medium"
                    >
                        Add to Cart
                    </button>
                    <button className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition font-medium">
                        Buy Now
                    </button>
                </div>

                {/* Additional Info */}
                <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                        Product Details:
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Brand: {product.brand || "AlBayt Mart"}</li>
                        <li>Category: {product.category}</li>
                        <li>Material: {product.material || "Stainless Steel"}</li>
                        <li>Warranty: {product.warranty || "1 Year"}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
