import { homeServices as services } from "../../../config/index";
import { motion as Motion } from "framer-motion";

const Services = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Our Services
                </h2>
                <p className="text-gray-600 mb-10">
                    We aim to make your online shopping experience smooth and satisfying.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl shadow-md bg-gray-50 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex flex-col items-center">
                                <service.icon className="text-secondary text-4xl mb-4" />
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
