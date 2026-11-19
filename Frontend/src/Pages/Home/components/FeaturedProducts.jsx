import { Link } from "react-router-dom";
import ProductCard from "../../../Components/ProductCard/index";
import { featuredProducts } from "../../../config";

export default function FeaturedProducts({ onAddToCart }) {
    return (
        <section className="page-width pb-16 md:pb-24">
            <div className="mb-8 flex items-end justify-between gap-5">
                <div>
                    <p className="eyebrow mb-3">THE CONSIDERED EDIT</p>
                    <h2 className="section-title">Good finds. Great everyday.</h2>
                </div>
                <Link to="/shop" className="text-link hidden shrink-0 sm:block">
                    View the collection
                </Link>
            </div>
            <div className="product-grid">
                {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
            </div>
        </section>
    );
}
