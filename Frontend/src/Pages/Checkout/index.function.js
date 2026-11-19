import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { billingFormDefaults, checkoutSettings } from "../../config/index";
import { useCart } from "../../Hooks/useCart";
import { validateName, validateEmail, validatePhone, validateAddress } from "../../Utils/validations";

export default function useCheckoutPage() {
    const [formData, setFormData] = useState(billingFormDefaults);

    const { cartItems, cartTotal: subtotal } = useCart();

    const billingFormRef = useRef(null);

    const handleChange = (event) =>
        setFormData((previous) => ({ ...previous, [event.target.name]: event.target.value }));

    const handleBillingSubmit = (event) => {
        event.preventDefault();

        handlePlaceOrder();
    };

    const shipping = subtotal > 0 ? checkoutSettings.shipping : 0;

    const total = subtotal + shipping;

    const handlePlaceOrder = () => {
        if (!cartItems.length) {
            toast.error("Your cart is empty.");
            return;
        }

        if (!billingFormRef.current?.reportValidity()) return;

        if (
            !validateName(formData.fullName) ||
            !validateEmail(formData.email) ||
            !validatePhone(formData.phone) ||
            !validateAddress(formData.address) ||
            !formData.city.trim() ||
            !formData.country.trim() ||
            !formData.postalCode.trim()
        ) {
            toast.error(
                "Please enter valid billing details, including your phone number and complete address."
            );
            return;
        }

        toast.info(checkoutSettings.unavailableMessage);
    };

    return {
        formData,
        cartItems,
        billingFormRef,
        handleChange,
        handleBillingSubmit,
        subtotal,
        shipping,
        total,
        handlePlaceOrder,
    };
}
