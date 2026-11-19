import useHomePage from "./index.function";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import NewArrivals from "./components/NewArrivals";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";

export default function Home() {
    const {
        handleAddToCart,
        handleShopNow,
        heroSliderRef,
        arrivalsSliderRef,
        handleHeroPrevious,
        handleHeroNext,
        handleArrivalsPrevious,
        handleArrivalsNext,
    } = useHomePage();

    return (
        <>
            <HeroSection
                onShopNow={handleShopNow}
                sliderRef={heroSliderRef}
                onPrevious={handleHeroPrevious}
                onNext={handleHeroNext}
            />

            <Services />

            <Categories />

            <FeaturedProducts onAddToCart={handleAddToCart} />

            <WhyChooseUs />

            <NewArrivals
                onAddToCart={handleAddToCart}
                sliderRef={arrivalsSliderRef}
                onPrevious={handleArrivalsPrevious}
                onNext={handleArrivalsNext}
            />

            <Testimonials />
        </>
    );
}
