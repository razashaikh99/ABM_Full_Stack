import ProductCard from "../../../Components/ProductCard/index";
import { newArrivalProducts, newArrivalsCarouselSettings } from "../../../config";
import Carousel from "./Carousel";

export default function NewArrivals({ onAddToCart, sliderRef, onPrevious, onNext }) {
    return (
        <section className="page-width section-space">
            <div className="mb-8">
                <p className="eyebrow mb-3">SOMETHING NEW TO LOVE</p>
                <h2 className="section-title">Fresh additions, familiar comforts.</h2>
            </div>
            <Carousel
                settings={newArrivalsCarouselSettings}
                label="New arrivals"
                sliderRef={sliderRef}
                onPrevious={onPrevious}
                onNext={onNext}
            >
                {newArrivalProducts.map((product) => (
                    <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
            </Carousel>
        </section>
    );
}
