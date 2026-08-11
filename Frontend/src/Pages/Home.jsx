// src/Pages/Home.jsx
import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import Categories from "../Components/Home/Categories";
import FeaturedProducts from "../Components/Home/FeaturedProducts";
import NewArrivals from "../Components/Home/NewArrivals";
import WhyChooseUs from "../Components/Home/WhyChooseUs";
import Testimonials from "../Components/Home/Testimonials";
import Services from "../Components/Home/Services";
import Newsletter from "../Components/Common/Newsletter";

const Home = () => {
    return (
        <div className="bg-white">
            <HeroSection />
            <Categories />
            <FeaturedProducts />
            <NewArrivals />
            <WhyChooseUs />
            <Testimonials />
            <Services />
            {/* <Newsletter /> */}
        </div>
    );
};

export default Home;
