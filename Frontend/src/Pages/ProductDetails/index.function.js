import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../Hooks/useCart";
import { toast } from "react-toastify";
import { products, ratingPositions } from "../../config/index";

export default function useProductDetailsPage() {

    const { id } = useParams();

    const product = products.find(item => item.id === id);

    const [selection, setSelection] = useState({ id, quantity: 1 });

    const quantity = selection.id === id ? selection.quantity : 1;

    const { addToCart, openCart } = useCart();

    const navigate = useNavigate();

    const stars = ratingPositions.map(position => ({ position,
        type: (product?.rating || 0) >= position ? "full" : (product?.rating || 0) >= position - 0.5 ? "half" : "empty" }));

    const handleIncreaseQuantity = () => setSelection({ id, quantity: quantity + 1 });

    const handleDecreaseQuantity = () => setSelection({ id, quantity: Math.max(1, quantity - 1) });

    const handleAddToCart = () => {
        if (!product) return;

        addToCart(product, quantity);

        toast.success(`${product.name} added to cart!`);

        openCart();
    };

    const handleBuyNow = () => {
        if (!product) return;

        addToCart(product, quantity);

        navigate("/checkout");
    };

    return {
        product,
        quantity,
        stars,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        handleAddToCart,
        handleBuyNow
    };
}
