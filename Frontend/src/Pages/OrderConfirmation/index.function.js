import { useLocation } from "react-router-dom";
import { formatCurrency } from "../../Utils/formatCurrency";

export default function useOrderConfirmationPage() {
    const { state } = useLocation();

    const order =
        state?.order?.id && Array.isArray(state.order.items) && state.order.items.length ? state.order : null;

    const total = order
        ? order.items.reduce((sum, item) => sum + item.price * item.quantity, 0) + (order.shipping || 0)
        : 0;

    return {
        order,
        total: formatCurrency(total),
    };
}
