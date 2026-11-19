import Button from "../../../Components/Button";
import { Link } from "react-router-dom";
import { heroSlides, heroCarouselSettings } from "../../../config";
import Carousel from "./Carousel";

export default function HeroSection({ onShopNow, sliderRef, onPrevious, onNext }) {
    return (
        <section className="bg-surface">
            <Carousel
                settings={heroCarouselSettings}
                label="Thoughtfully chosen for your home"
                variant="hero"
                sliderRef={sliderRef}
                onPrevious={onPrevious}
                onNext={onNext}
            >
                {heroSlides.map((slide) => (
                    <div key={slide.id}>
                        <div className="mx-auto grid max-w-[1600px] md:min-h-[550px] md:grid-cols-2 lg:min-h-[580px]">
                            <div className="flex flex-col justify-center px-5 pb-16 pt-12 sm:px-8 md:pb-20 md:pl-12 md:pr-10 lg:pl-[max(48px,calc((100vw-1224px)/2))]">
                                <p className="eyebrow mb-6">THE EVERYDAY, BEAUTIFULLY CONSIDERED</p>

                                <h1 className="mb-6 max-w-lg font-display text-[46px] leading-[1.04] tracking-[-0.045em] text-primary sm:text-6xl lg:text-[72px]">
                                    {slide.title}
                                </h1>

                                <p className="mb-8 max-w-sm text-sm leading-6 sm:leading-7 text-muted sm:text-base">
                                    {slide.subtitle}
                                </p>

                                <div className="flex flex-wrap items-center gap-6">
                                    <Button onClick={onShopNow} >
                                        Explore the collection
                                    </Button>
                                    <Link to="/about" className="text-link">
                                        Our story
                                    </Link>
                                </div>
                            </div>

                            <div className="relative min-h-72 md:min-h-full">
                                <img
                                    src={slide.image}
                                    alt="A welcoming kitchen with thoughtfully arranged everyday essentials"
                                    fetchPriority={slide.id === 1 ? "high" : "auto"}
                                   className="absolute inset-0 h-full w-full object-cover"
                                />
                                <div className="absolute bottom-6 left-6 border-l-2 border-white pl-4 text-sm font-medium leading-5 sm:leading-6 text-white [text-shadow:0_1px_8px_#000]">
                                    For the moments
                                    <br />
                                    that make a home.
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    );
}
