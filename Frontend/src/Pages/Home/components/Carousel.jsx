import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ children, settings, label, variant = "products", sliderRef, onPrevious, onNext }) {

    return (
        <div className={`carousel carousel-${variant} relative`} role="region" aria-roledescription="carousel" aria-label={label}>
            <Slider ref={sliderRef} {...settings}>{children}</Slider>
            <button type="button" onClick={onPrevious} aria-label="Previous slide"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70">
                <FiChevronLeft size={24} />
            </button>
            <button type="button" onClick={onNext} aria-label="Next slide"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70">
                <FiChevronRight size={24} />
            </button>
        </div>
    );
}
