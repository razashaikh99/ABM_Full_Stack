import Button from "../Button";
import { Minus, Plus } from "lucide-react";

export default function QuantitySelector({ quantity, onDecrease, onIncrease, name = "item" }) {
    return (
        <div className="inline-flex h-11 shrink-0 items-center rounded-sm border border-line bg-white">
            <Button
                type="button"
                variant="plain"
               className="flex h-full w-10 items-center justify-center hover:bg-surface disabled:opacity-35"
                onClick={onDecrease}
                disabled={quantity <= 1}
                aria-label={"Decrease quantity of " + name}
            >
                <Minus size={15} />
            </Button>
            <output className="min-w-8 text-center text-sm" aria-live="polite">
                {quantity}
            </output>
            <Button
                type="button"
                variant="plain"
               className="flex h-full w-10 items-center justify-center hover:bg-surface"
                onClick={onIncrease}
                aria-label={"Increase quantity of " + name}
            >
                <Plus size={15} />
            </Button>
        </div>
    );
}
