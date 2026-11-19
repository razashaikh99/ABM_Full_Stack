import { formatCurrency } from "../../Utils/formatCurrency";

export default function ProductPrice({ price, oldPrice, className = "" }) {
    return (
        <div className={"flex flex-wrap items-baseline gap-x-3 gap-y-1 " + className}>
            <span className="font-semibold text-primary">{formatCurrency(price)}</span>
            {oldPrice > price && (
                <del className="text-sm font-normal text-muted">{formatCurrency(oldPrice)}</del>
            )}
        </div>
    );
}
