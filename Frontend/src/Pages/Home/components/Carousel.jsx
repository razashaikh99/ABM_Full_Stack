import Button from "../../../Components/Button";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({
    children,
    settings,
    label,
    variant = "products",
    sliderRef,
    onPrevious,
    onNext,
}) {
    return (
        <div
           className={"carousel carousel-" + variant + " relative"}
            role="region"
            aria-roledescription="carousel"
            aria-label={label}
        >
            <Slider ref={sliderRef} {...settings}>
                {children}
            </Slider>

            <div
               className={
                    variant === "hero"
                        ? "absolute bottom-5 right-5 flex gap-2 sm:right-8"
                        : "mt-5 flex justify-end gap-2"
                }
            >
                <Button
                    type="button"
                    onClick={onPrevious}
                    aria-label="Previous slide"
                    variant="plain"
                   className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-white text-primary hover:bg-surface"
                >
                    <ChevronLeft size={18} />
                </Button>

                <Button
                    type="button"
                    onClick={onNext}
                    aria-label="Next slide"
                    variant="plain"
                   className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-white text-primary hover:bg-surface"
                >
                    <ChevronRight size={18} />
                </Button>
            </div>
        </div>
    );
}
