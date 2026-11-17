import useProductDetailsPage from "./index.function";
import { productDefaults } from "../../config/index";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { formatCurrency } from "../../Utils/formatCurrency";

const ProductDetails = () => {
    const {
        product,
        quantity,
        stars,
        handleAddToCart,
        handleBuyNow,
        handleDecreaseQuantity,
        handleIncreaseQuantity
    } = useProductDetailsPage();

    if (!product) {
        return (
            <div className="flex items-center justify-center h-screen text-gray-700 text-xl">
                Product not found!
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">

            <div className="flex items-center justify-center bg-white p-6 rounded-2xl shadow-md">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full max-w-md object-cover rounded-lg"
                />
            </div>

            <div className="space-y-5">
                <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

                <div className="flex items-center space-x-2">
                    {stars.map((star) => star.type === "full" ? <FaStar key={star.position} className="text-yellow-400" /> : star.type === "half" ? <FaStarHalfAlt key={star.position} className="text-yellow-400" /> : <FaRegStar key={star.position} className="text-yellow-400" />)}
                    <span className="text-sm text-gray-600">({product.rating})</span>
                </div>

                <p className="text-2xl font-semibold text-primary">
                    {formatCurrency(product.price)}
                </p>

                <p className="text-gray-700 leading-relaxed">
                    {product.description || productDefaults.description}
                </p>

                <div className="flex items-center space-x-4">
                    <span className="text-gray-700 font-medium">Quantity:</span>

                    <div className="flex items-center border rounded-lg">
                        <button
                            onClick={handleDecreaseQuantity}
                            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-l-lg"
                        >
                            -
                        </button>

                        <span className="px-4">{quantity}</span>

                        <button
                            onClick={handleIncreaseQuantity}
                            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-r-lg"
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={handleAddToCart}
                        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition font-medium"
                    >
                        Add to Cart
                    </button>

                    <button onClick={handleBuyNow} className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition font-medium">
                        Buy Now
                    </button>
                </div>

                <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                        Product Details:
                    </h3>

                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>Brand: {product.brand || productDefaults.brand}</li>

                        <li>Category: {product.category}</li>

                        <li>Material: {product.material || productDefaults.material}</li>

                        <li>Warranty: {product.warranty || productDefaults.warranty}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
