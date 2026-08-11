import Breadcrumb from "../Components/Common/Breadcrumb";

const AboutUs = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <div className="bg-secondary/15 text-primary py-12 sm:py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">About Us</h1>
                    <p className="text-md sm:text-xl max-w-2xl mx-auto">
                        Get in touch with us for any questions or feedback
                    </p>
                </div>
            </div>

            {/* About Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-40 py-8 sm:py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left: Image */}
                    <div className="relative order-2 lg:order-1">
                        <img
                            src="https://images.pexels.com/photos/5644353/pexels-photo-5644353.jpeg?cs=srgb&dl=pexels-polina-kovaleva-5644353.jpg&fm=jpg"
                            alt="About AlBayt Mart"
                            className="w-full rounded-xl md:rounded-2xl shadow-lg"
                        />
                        <div className="absolute -bottom-3 -right-3 sm:-bottom-3 sm:-right-4 md:-bottom-3 md:-right-6 bg-secondary text-white px-4 py-1 sm:px-5 sm:py-1 md:px-6 md:py-1 rounded-full shadow-md">
                            <h3 className="text-sm sm:text-base md:text-lg font-semibold">Since 2024</h3>
                        </div>
                    </div>

                    {/* Right: Text */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                            Welcome to AlBayt Mart
                        </h2>
                        <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                            AlBayt Mart is your trusted online destination for quality products at affordable prices.
                            From groceries to lifestyle essentials, we are dedicated to making your shopping experience easy, reliable, and enjoyable.
                        </p>
                        <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                            Our goal is to provide our customers with convenience, value, and trust —
                            all from the comfort of their homes. We believe in offering the best service, ensuring customer satisfaction, and building lasting relationships.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8 md:mb-10">Our Mission & Vision</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                        {/* Mission */}
                        <div className="bg-gray-100 p-6 sm:p-8 rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition">
                            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4">Our Mission</h3>
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                                To redefine online shopping by offering convenience, quality, and affordability —
                                making AlBayt Mart the go-to platform for every household.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-gray-100 p-6 sm:p-8 rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition">
                            <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4">Our Vision</h3>
                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                                To become the most trusted e-commerce brand, recognized for innovation,
                                excellent customer service, and strong community values.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team / Values Section (Optional) */}
            <section className="container mx-auto px-4 py-12 md:py-16 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">Our Core Values</h2>
                <p className="text-gray-700 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
                    Integrity, customer focus, quality, and teamwork are at the heart of everything we do.
                    We aim to build a shopping experience that feels personal, easy, and reliable.
                </p>

                {/* Values Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 max-w-6xl mx-auto">
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <div className="text-secondary text-3xl mb-4">✓</div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Integrity</h3>
                        <p className="text-gray-600 text-sm">Honest and transparent in all our dealings</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <div className="text-secondary text-3xl mb-4">❤️</div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Customer Focus</h3>
                        <p className="text-gray-600 text-sm">Your satisfaction is our top priority</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <div className="text-secondary text-3xl mb-4">⭐</div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Quality</h3>
                        <p className="text-gray-600 text-sm">Premium products with guaranteed quality</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <div className="text-secondary text-3xl mb-4">🤝</div>
                        <h3 className="text-lg font-semibold text-primary mb-2">Teamwork</h3>
                        <p className="text-gray-600 text-sm">Collaborating to serve you better</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;