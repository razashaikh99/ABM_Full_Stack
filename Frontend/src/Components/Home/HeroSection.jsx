import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import Hero1 from "../../../public/BannerImages/hero1.jpg"
// import Hero2 from "../../../public/BannerImages/hero2.jpg"
// import Hero3 from "../../../public/BannerImages/hero3.jpg"

const HeroSection = () => {
    const slides = [
        {
            id: 1,
            title: "Upgrade Your Style",
            subtitle: "Discover the Latest Trends in Fashion",
            // image: Hero1,
            image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2l0Y2hlbiUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
            btnText: "Shop Now",
        },
        {
            id: 2,
            title: "New Arrivals Are Here",
            subtitle: "Fresh Looks for Every Occasion",
            // image: Hero2,
            image: "https://img.freepik.com/free-photo/empty-modern-room-with-furniture_23-2149178335.jpg",
            btnText: "Shop Now",
        },
        {
            id: 3,
            title: "Exclusive Offers",
            subtitle: "Get Up to 50% Off on Selected Items",
            // image: Hero3,
            image: "https://st4.depositphotos.com/27814410/31398/i/450/depositphotos_313981216-stock-photo-wooden-table-top-blurred-kitchen.jpg",
            btnText: "Shop Now",
        },
    ];

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <button
                onClick={onClick}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white p-2 rounded-full hover:bg-black/50"
                aria-label="Next slide"
            >
                <FiChevronRight size={24} />
            </button>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <button
                onClick={onClick}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white p-2 rounded-full hover:bg-black/50"
                aria-label="Previous slide"
            >
                <FiChevronLeft size={24} />
            </button>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        pauseOnHover: false,
        appendDots: (dots) => (
            <div style={{ position: "absolute", bottom: "20px", width: "100%" }}>
                <ul className="m-0 flex justify-center">{dots}</ul>
            </div>
        ),
        customPaging: () => (
            <div className="w-3 h-3 bg-white/70 rounded-full hover:bg-white transition-all duration-300"></div>
        ),
    };

    return (
        <section className="relative w-full overflow-hidden">
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div key={slide.id} className="relative w-full h-[75vh] md:h-[90vh]">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 md:px-8 text-shadow-lg/20">
                            <motion.h2
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="text-3xl md:text-6xl font-bold text-white mb-4"
                            >
                                {slide.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="text-lg md:text-2xl text-gray-200 mb-6"
                            >
                                {slide.subtitle}
                            </motion.p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-black font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition"
                            >
                                {slide.btnText}
                            </motion.button>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default HeroSection;