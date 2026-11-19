import Button from "../Button";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import ProductPrice from "../ProductPrice/index";
import ProductRating from "../ProductRating/index";

export default function ProductCard({ product, onAddToCart }) {
    const oldPrice = product.originalPrice || product.oldPrice;

    return (
        <article className="group min-w-0">
            <div className="relative mb-4 overflow-hidden rounded-sm bg-surface">
                <Link
                    to={"/product/" + product.id}
                    aria-label={"View " + product.name}
                   className="block aspect-[4/4.3] overflow-hidden"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                       className="h-full w-full object-contain p-5 mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.04] sm:p-7"
                    />
                </Link>

                {oldPrice > product.price && (
                    <span className="absolute left-3 top-3 bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-secondary">
                        {Math.round((1 - product.price / oldPrice) * 100)}% less
                    </span>
                )}

                <Button
                    type="button"
                    onClick={() => onAddToCart(product)}
                    aria-label={"Add " + product.name + " to cart"}
                    variant="plain"
                   className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
                >
                    <Plus size={20} />
                </Button>
            </div>

            <div className="mb-2 flex items-center justify-between gap-2">
                <p className="text-[11px] font-medium uppercase tracking-wider text-muted">
                    {product.category}
                </p>
                <ProductRating rating={product.rating} />
            </div>

            <h3 className="mb-2 min-h-10 text-sm font-medium leading-5 text-primary">
                <Link to={"/product/" + product.id} className="hover:underline">
                    {product.name}
                </Link>
            </h3>

            <ProductPrice price={product.price} oldPrice={oldPrice} className="text-sm" />
        </article>
    );
}
