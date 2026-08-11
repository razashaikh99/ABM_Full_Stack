import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../Hooks/useCart";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewArrivals = () => {
    const { addToCart } = useCart();

    const newProducts = [
        {
            id: 1,
            name: "Premium Cooking Pot Set",
            price: 4999,
            // image: "/ProductsImages/cookware/pot-set.jpg",
            image: "https://majesticchef.pk/cdn/shop/files/001_3_24eb845e-706b-4742-8fc5-e3648d737c42.jpg?v=1735643645",
            category: "Kitchen Accessory"
        },
        {
            id: 2,
            name: "Smart Blender Pro 2.0",
            price: 3899,
            // image: "/ProductsImages/appliances/blender.jpg",
            image: "https://cdn.buyist.com/cmr/p13647/opt/194ea8c814b44a1fa2be06d6a597ae07_1.png",
            category: "Kitchen Accessory"
        },
        {
            id: 3,
            name: "Ceramic Tea Cups Set",
            price: 1799,
            // image: "/ProductsImages/drinkware/tea-cups.jpg",
            image: "https://aenzayhomes.pk/wp-content/uploads/2021/03/Tea-Cup-Set-403x403.jpg",
            category: "Kitchen Accessory"
        },
        {
            id: 4,
            name: "Microwave-Safe Lunch Box",
            price: 1299,
            // image: "/ProductsImages/storage/lunch-box.jpg",
            image: "https://www.oliveware.com/cdn/shop/files/71avrON3frL._SL1500.jpg?v=1700727906&width=1946",
            category: "Kitchen Accessory"
        },
        {
            id: 5,
            name: "Electric Hand Mixer",
            price: 2599,
            // image: "/ProductsImages/appliances/mixer.jpg",
            image: "https://eveen.pk/cdn/shop/products/image_3d8a2676-d3ae-4785-b183-ff4aafe11e2a.jpg?v=1714156272",
            category: "Kitchen Accessory"
        },
        {
            id: 6,
            name: "Smart Blender Pro 2.0",
            price: 3899,
            // image: "/ProductsImages/appliances/blender.jpg",
            image: "https://cdn.buyist.com/cmr/p13647/opt/194ea8c814b44a1fa2be06d6a597ae07_1.png",
            category: "Kitchen Accessory"
        },
    ];


    return (
        <section className="py-10 sm:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        New Arrivals
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Explore our latest collection of kitchen essentials!
                    </p>
                </div>

                {/* Slider Container */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
                    {newProducts.map((product) => (
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
                                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                    NEW
                                </span>
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

export default NewArrivals;