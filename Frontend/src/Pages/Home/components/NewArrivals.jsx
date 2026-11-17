import { newArrivalsCarouselSettings, newArrivalProducts as newProducts } from "../../../config/index";
import Carousel from "./Carousel";
import { motion as Motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";

const NewArrivals = ({ onAddToCart, sliderRef, onPrevious, onNext }) => {

    return (
        <section className="py-10 sm:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        New Arrivals
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Explore our latest collection of kitchen essentials!
                    </p>
                </div>

                <Carousel settings={newArrivalsCarouselSettings} label="New arrivals"
                    sliderRef={sliderRef} onPrevious={onPrevious} onNext={onNext}>
                    {newProducts.map((product) => (
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

                                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                    NEW
                                </span>
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
                </Carousel>
            </div>
        </section>
    );
};

export default NewArrivals;
