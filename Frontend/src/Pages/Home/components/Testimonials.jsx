import { homeTestimonials as testimonials } from "../../../config/index";
import { Star } from "lucide-react";

const Testimonials = () => {
    return (
        <section className="py-16 bg-orange-50">
            <div className="container text-center max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
                    What Our Customers Say
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {testimonial.name}
                            </h3>
                            <div className="flex justify-center mb-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="text-yellow-400 w-5 h-5 fill-yellow-400"
                                    />
                                ))}
                            </div>
                            <p className="text-gray-600 italic">{testimonial.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
