export default function useCartItem({ item, onRemove, onQuantityChange }) {

    const handleDecreaseQuantity = () => onQuantityChange(item.id, item.quantity - 1);

    const handleIncreaseQuantity = () => onQuantityChange(item.id, item.quantity + 1);

    const handleRemove = () => onRemove(item.id);

    return {
        handleDecreaseQuantity,
        handleIncreaseQuantity,
        handleRemove
    };
}
