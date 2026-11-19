import { useEffect, useRef } from "react";
import { useCart } from "../../Hooks/useCart";
import { useNavigate } from "react-router-dom";

export default function useCartSidebar() {
    const {
        cartItems,
        cartTotal: totalPrice,
        isCartOpen: isOpen,
        closeCart: onClose,
        cartCount: itemCount,
        removeFromCart,
        updateQuantity,
    } = useCart();
    const navigate = useNavigate();

    const closeButtonRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

        const previousFocus = document.activeElement;
        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        closeButtonRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === "Escape") onClose();

            if (event.key === "Tab") {
                const dialog = closeButtonRef.current?.closest('[role="dialog"]');
                const buttons = dialog?.querySelectorAll(
                    'button:not([disabled]), a[href], input:not([disabled]), [tabindex="0"]'
                );
                const first = buttons?.[0];
                const last = buttons?.[buttons.length - 1];

                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last?.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first?.focus();
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);

            document.body.style.overflow = previousOverflow;

            previousFocus?.focus();
        };
    }, [isOpen, onClose]);

    const handleCheckout = () => {
        onClose();

        navigate("/checkout");
    };

    return {
        cartItems,
        itemCount,
        totalPrice,
        handleCheckout,
        isOpen,
        onClose,
        removeFromCart,
        updateQuantity,
        closeButtonRef,
    };
}
