import { featuredProducts } from "../../../config/index";
import { motion as Motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";

const FeaturedProducts = ({ onAddToCart }) => {

    return (
        <section className="py-10 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        Featured Products
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Our best-selling kitchen essentials, loved by home chefs!
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
                    {featuredProducts.map((product) => (
                        <Motion.div
                            key={product.id}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl sm:rounded-2xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
                        >

                            <div className="relative overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
                                />

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

                            <div className="p-4 md:p-5">
                                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 line-clamp-2 h-16 lg:h-16 sm:h-14">
                                    {product.name}
                                </h3>

                                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                                    {product.category}
                                </p>

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

                                <button
                                    onClick={() => onAddToCart(product)}
                                    className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-secondary text-white font-medium hover:bg-orange-500 transition-all duration-300 text-sm sm:text-base"
                                >
                                    <FaShoppingCart />
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </Motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FeaturedProducts;
