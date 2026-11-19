import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import { Package, MessageCircle, ShieldCheck } from "lucide-react";
import useProductDetailsPage from "./index.function";
import Breadcrumb from "../../Components/Breadcrumb/index";
import ProductPrice from "../../Components/ProductPrice/index";
import ProductRating from "../../Components/ProductRating/index";
import QuantitySelector from "../../Components/QuantitySelector/index";
import ProductCard from "../../Components/ProductCard/index";
import EmptyState from "../../Components/EmptyState/index";

export default function ProductDetails() {
    const {
        product,
        quantity,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        handleAddToCart,
        handleBuyNow,
        relatedProducts,
        handleRelatedAdd,
    } = useProductDetailsPage();

    if (!product)
        return (
            <EmptyState
                title="This find isn't here."
                description="The product may have moved. There are plenty more everyday essentials to discover."
            />
        );

    return (
        <div className="page-width pb-20">
            <Breadcrumb title={product.name} />

            <div className="grid items-start gap-10 pb-16 md:grid-cols-2 lg:gap-16">
                <div>
                    <div className="flex aspect-square items-center justify-center rounded-sm bg-surface p-8 sm:p-14">
                        <img
                            src={product.image}
                            alt={product.name}
                           className="max-h-full w-full object-contain mix-blend-multiply"
                        />
                    </div>
                    <p className="mt-4 text-center text-xs text-muted">
                        A closer look at your next everyday essential.
                    </p>
                </div>

                <div className="pt-2 lg:pt-6">
                    <p className="eyebrow mb-4">{product.category}</p>
                    <h1 className="mb-4 font-display text-4xl leading-tight tracking-tight text-primary lg:text-5xl">
                        {product.name}
                    </h1>
                    <ProductRating rating={product.rating} />
                    <ProductPrice
                        price={product.price}
                        oldPrice={product.originalPrice || product.oldPrice}
                       className="my-6 text-2xl"
                    />
                    <p className="mb-7 text-sm leading-6 sm:leading-7 text-muted">
                        {product.description ||
                            "A practical addition to your kitchen, thoughtfully selected for the moments you make every day."}
                    </p>

                    <div className="mb-6 border-t border-line pt-6">
                        <p className="mb-3 text-sm font-medium text-primary">Quantity</p>
                        <QuantitySelector
                            quantity={quantity}
                            name={product.name}
                            onDecrease={handleDecreaseQuantity}
                            onIncrease={handleIncreaseQuantity}
                        />
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                        <Button  onClick={handleAddToCart}>
                            Add to cart
                        </Button>
                        <Button variant="outline" onClick={handleBuyNow}>
                            Buy now
                        </Button>
                    </div>

                    <p className="mt-4 text-xs leading-5 text-muted">
                        You can review your cart before checkout. Online order submission is not yet
                        available.
                    </p>

                    <div className="mt-8 space-y-4 border-y border-line py-6 text-sm text-muted">
                        <p className="flex items-center gap-3">
                            <Package size={18} className="text-primary" />
                            Carefully selected for everyday use
                        </p>
                        <p className="flex items-center gap-3">
                            <ShieldCheck size={18} className="text-primary" />
                            <Link to="/return-policy" className="underline underline-offset-4">
                                Read our returns & refund policy
                            </Link>
                        </p>
                        <p className="flex items-center gap-3">
                            <MessageCircle size={18} className="text-primary" />
                            <Link to="/contact" className="underline underline-offset-4">
                                A question about this product? Let's talk.
                            </Link>
                        </p>
                    </div>

                    <details className="border-b border-line py-5" open>
                        <summary className="text-sm font-semibold text-primary">The details</summary>
                        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                            <dt className="text-muted">Category</dt>
                            <dd>{product.category}</dd>
                            <dt className="text-muted">Collection</dt>
                            <dd>AlBayt Mart</dd>
                            {product.material && (
                                <>
                                    <dt className="text-muted">Material</dt>
                                    <dd>{product.material}</dd>
                                </>
                            )}
                        </dl>
                    </details>
                </div>
            </div>

            {!!relatedProducts.length && (
                <section className="border-t border-line pt-12">
                    <p className="eyebrow mb-3">BETTER TOGETHER</p>
                    <h2 className="section-title mb-8">A few more good finds.</h2>
                    <div className="product-grid">
                        {relatedProducts.map((item) => (
                            <ProductCard key={item.id} product={item} onAddToCart={handleRelatedAdd} />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
