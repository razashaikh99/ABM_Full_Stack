import { homeFeatures as features } from "../../../config/index";

const WhyChooseUs = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container text-center max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Why Choose Us
                </h2>
                <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                    Discover why our kitchenware products are the top choice for every home —
                    combining quality, beauty, and practicality.
                </p>

                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-3 md:gap-8">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-orange-50 shadow-md hover:shadow-lg hover:bg-orange-100 transition duration-300"
                        >
                            <div className="flex justify-center mb-4"><item.icon className="w-10 h-10 text-orange-500" /></div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
