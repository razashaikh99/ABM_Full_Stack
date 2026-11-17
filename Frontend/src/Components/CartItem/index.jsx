import useCartItem from "./index.function";
import { formatCurrency } from "../../Utils/formatCurrency";
const CartItem = ({ item, onRemove, onQuantityChange }) => {
    const {
        handleDecreaseQuantity,
        handleIncreaseQuantity,
        handleRemove
    } = useCartItem({ item, onRemove, onQuantityChange });

    return (
        <div className="flex items-center justify-between border-b py-4">

            <div className="flex items-center gap-4">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-500 text-sm">{formatCurrency(item.price)}</p>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <button
                    aria-label={`Decrease quantity of ${item.name}`}
                    onClick={handleDecreaseQuantity}
                    disabled={item.quantity === 1}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                    -
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                    aria-label={`Increase quantity of ${item.name}`}
                    onClick={handleIncreaseQuantity}
                    className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                    +
                </button>
            </div>

            <div className="flex items-center gap-4">
                <p className="font-semibold text-gray-800">
                    {formatCurrency(item.price * item.quantity)}
                </p>
                <button
                    onClick={handleRemove}
                    className="text-red-500 hover:text-red-700 transition"
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;
