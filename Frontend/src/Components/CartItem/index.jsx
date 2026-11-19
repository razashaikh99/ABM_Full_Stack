import Button from "../Button";
import { Trash2 } from "lucide-react";
import useCartItem from "./index.function";
import QuantitySelector from "../QuantitySelector/index";
import ProductPrice from "../ProductPrice/index";

export default function CartItem({ item, onRemove, onQuantityChange }) {
    const { handleDecreaseQuantity, handleIncreaseQuantity, handleRemove } = useCartItem({
        item,
        onRemove,
        onQuantityChange,
    });

    return (
        <article className="grid grid-cols-[80px_1fr] gap-4 border-b border-line py-6 sm:grid-cols-[96px_1fr]">
            <div className="flex aspect-square items-center rounded-sm bg-surface p-3">
                <img
                    src={item.image}
                    alt={item.name}
                   className="h-full w-full object-contain mix-blend-multiply"
                />
            </div>
            <div className="min-w-0">
                <div className="mb-2 flex items-start justify-between gap-3">
                    <h3 className="text-sm font-medium leading-6 text-primary">{item.name}</h3>
                    <Button
                        variant="plain"
                       className="shrink-0 p-1 text-muted hover:text-secondary"
                        onClick={handleRemove}
                        aria-label={"Remove " + item.name}
                    >
                        <Trash2 size={16} />
                    </Button>
                </div>
                <ProductPrice price={item.price * item.quantity} className="mb-4 text-sm" />
                <QuantitySelector
                    quantity={item.quantity}
                    name={item.name}
                    onDecrease={handleDecreaseQuantity}
                    onIncrease={handleIncreaseQuantity}
                />
            </div>
        </article>
    );
}
