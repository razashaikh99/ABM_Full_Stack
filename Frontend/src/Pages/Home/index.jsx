import useHomePage from "./index.function";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import NewArrivals from "./components/NewArrivals";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";

const Home = () => {
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
        <div className="bg-white">
            <HeroSection
                onShopNow={handleShopNow}
                sliderRef={heroSliderRef}
                onPrevious={handleHeroPrevious}
                onNext={handleHeroNext}
            />

            <Categories />

            <FeaturedProducts onAddToCart={handleAddToCart} />

            <NewArrivals
                onAddToCart={handleAddToCart}
                sliderRef={arrivalsSliderRef}
                onPrevious={handleArrivalsPrevious}
                onNext={handleArrivalsNext}
            />

            <WhyChooseUs />

            <Testimonials />

            <Services />
        </div>
    );
};

export default Home;
