import { motion } from "framer-motion";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-xl overflow-hidden group cursor-pointer border border-gray-100"
        >
            {/* Wishlist Icon */}
            <div className="absolute top-3 right-3 z-10 bg-white/90 p-2 rounded-full shadow-sm hover:bg-red-500 hover:text-white transition-colors">
                <FaHeart className="text-gray-500 text-base md:text-lg group-hover:scale-110 transition-transform hover:text-white" />
            </div>

            {/* Product Image */}
            <div className="w-full h-48 sm:h-56 md:h-64 lg:h-70 overflow-hidden bg-gray-50">
                <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
            </div>

            {/* Product Details */}
            <div className="p-4 md:p-5">
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1 line-clamp-2 h-12 md:h-12">
                    {product.name}
                </h3>
                
                <div className="flex items-center justify-between mb-2">
                    <p className="text-xs md:text-sm text-gray-500 line-clamp-1">
                        {product.category}
                    </p>
                </div>

                {/* Price and Add to Cart */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex flex-col">
                        <p className="text-xl md:text-xl font-bold text-primary">
                            Rs. {product.price?.toLocaleString() || "0"}
                        </p>
                        {product.originalPrice && (
                            <p className="text-sm text-gray-400 line-through">
                                Rs. {product.originalPrice.toLocaleString()}
                            </p>
                        )}
                    </div>
                    
                    <button className="bg-primary text-white py-2.5 px-4 md:py-3 md:px-4 rounded-lg md:rounded-xl hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm md:text-base w-full sm:w-auto">
                        <FaShoppingCart className="text-sm md:text-base" /> 
                        <span className="hidden sm:inline">Add to Cart</span>
                        <span className="sm:hidden">Add</span>
                    </button>
                </div>

                {/* Stock Status for Mobile */}
                {product.stock && (
                    <div className={`mt-3 text-center md:hidden text-xs font-medium px-2 py-1 rounded ${product.stock < 10 
                        ? 'bg-red-100 text-red-700' 
                        : 'bg-green-100 text-green-700'}`}
                    >
                        {product.stock < 10 ? `Only ${product.stock} left` : 'In Stock'}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

// ✅ Prop Validation
ProductCard.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number,
        rating: PropTypes.number,
        reviews: PropTypes.number,
        originalPrice: PropTypes.number,
        stock: PropTypes.number,
    }).isRequired,
};

export default ProductCard;