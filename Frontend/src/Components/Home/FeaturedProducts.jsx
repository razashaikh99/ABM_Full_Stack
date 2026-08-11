import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../Hooks/useCart";

const FeaturedProducts = () => {
    const { addToCart } = useCart();

    const featuredProducts = [
        {
            id: 1,
            name: "Non-Stick Frying Pan",
            price: 2499,
            originalPrice: 2999,
            // image: "/ProductsImages/cookware/frying-pan.jpg",
            image: "https://majesticchef.pk/cdn/shop/files/Small1_3b896c06-a0b9-465d-88a3-bae9f0d0fd37.jpg?v=1759584686",
            category: "Cookware",
            isFeatured: true,
        },
        {
            id: 2,
            name: "Electric Kettle with Temperature Control",
            price: 3199,
            // image: "/ProductsImages/appliances/kettle.jpg",
            image: "https://cdn.shopify.com/s/files/1/0632/2526/6422/files/1_487e738c-5310-42c1-8fc6-b8ab851ec67d.jpg?v=1753848535",
            category: "Appliances",
            discount: 15,
        },
        {
            id: 3,
            name: "Premium Glass Water Bottle Set (2 Pieces)",
            price: 999,
            // image: "/ProductsImages/drinkware/water-bottle.jpg",
            image: "https://breachit.pk/cdn/shop/files/create-your-own-customized-glass-water-bottle-7679108.png?v=1761067472",
            category: "Drinkware",
            isBestSeller: true,
        },
        {
            id: 4,
            name: "Food Storage Containers Set (6 Pieces)",
            price: 2799,
            originalPrice: 3499,
            // image: "/ProductsImages/storage/containers.jpg",
            image: "https://www.tupperware.com/cdn/shop/files/ultra-clear-2405-13019.jpg?v=1724850447&width=1445",
            category: "Storage",
            discount: 20,
        },
    ];

    return (
        <section className="py-10 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        Featured Products
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Our best-selling kitchen essentials, loved by home chefs!
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
                    {featuredProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl sm:rounded-2xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
                                />

                                {/* Badges */}
                                <div className="absolute top-3 left-3 flex flex-col gap-1">
                                    {product.isFeatured && (
                                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                            FEATURED
                                        </span>
                                    )}
                                    {product.isBestSeller && (
                                        <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                                            BEST SELLER
                                        </span>
                                    )}
                                    {product.discount && (
                                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                            -{product.discount}% OFF
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4 md:p-5">
                                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 line-clamp-2 h-16 lg:h-16 sm:h-14">
                                    {product.name}
                                </h3>

                                {/* Category */}
                                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                                    {product.category}
                                </p>

                                {/* Price */}
                                <div className="flex items-center gap-2 mt-3 mb-3">
                                    <p className="text-primary font-bold text-base sm:text-lg md:text-xl">
                                        Rs. {product.price.toLocaleString()}
                                    </p>
                                    {product.originalPrice && (
                                        <p className="text-gray-400 line-through text-sm sm:text-base">
                                            Rs. {product.originalPrice.toLocaleString()}
                                        </p>
                                    )}
                                </div>

                                {/* Add to Cart Button */}
                                <button
                                    onClick={() => addToCart(product)}
                                    className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-secondary text-white font-medium hover:bg-orange-500 transition-all duration-300 text-sm sm:text-base"
                                >
                                    <FaShoppingCart />
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturedProducts;