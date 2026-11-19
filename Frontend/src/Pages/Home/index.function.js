import { toast } from "react-toastify";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Hooks/useCart";

export default function useHomePage() {
    const navigate = useNavigate();

    const { addToCart } = useCart();

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success(`${product.name} added to cart!`);
    };

    const heroSliderRef = useRef(null);

    const arrivalsSliderRef = useRef(null);

    const handleShopNow = () => navigate("/shop");

    const handleHeroPrevious = () => heroSliderRef.current?.slickPrev();

    const handleHeroNext = () => heroSliderRef.current?.slickNext();

    const handleArrivalsPrevious = () => arrivalsSliderRef.current?.slickPrev();

    const handleArrivalsNext = () => arrivalsSliderRef.current?.slickNext();

    return {
        handleAddToCart,
        handleShopNow,
        heroSliderRef,
        arrivalsSliderRef,
        handleHeroPrevious,
        handleHeroNext,
        handleArrivalsPrevious,
        handleArrivalsNext,
    };
}
