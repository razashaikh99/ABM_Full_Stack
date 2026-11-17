import { heroCarouselSettings, heroSlides as slides } from "../../../config/index";
import Carousel from "./Carousel";
import { motion as Motion } from "framer-motion";

const HeroSection = ({ onShopNow, sliderRef, onPrevious, onNext }) => {

    return (
        <section className="relative w-full overflow-hidden">
            <Carousel settings={heroCarouselSettings} label="Featured offers" variant="hero"
                sliderRef={sliderRef} onPrevious={onPrevious} onNext={onNext}>
                {slides.map((slide) => (
                    <div key={slide.id} className="relative w-full h-[75vh] md:h-[90vh]">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 md:px-8 text-shadow-lg/20">
                            <Motion.h2
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="text-3xl md:text-6xl font-bold text-white mb-4"
                            >
                                {slide.title}
                            </Motion.h2>
                            <Motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="text-lg md:text-2xl text-gray-200 mb-6"
                            >
                                {slide.subtitle}
                            </Motion.p>
                            <Motion.button onClick={onShopNow}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-black font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition"
                            >
                                {slide.btnText}
                            </Motion.button>
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    );
};

export default HeroSection;
