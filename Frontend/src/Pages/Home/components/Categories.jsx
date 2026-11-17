import { homeCategories as categories } from "../../../config/index";
import { motion as Motion } from "framer-motion";

const Categories = () => {

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        Shop by Category
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Explore premium kitchen essentials for your home
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-5">
                    {categories.map((cat) => (
                        <Motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative group overflow-hidden rounded-2xl shadow-lg bg-white cursor-pointer"
                        >
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                                <h3 className="text-white text-xl font-semibold tracking-wide">
                                    {cat.name}
                                </h3>
                            </div>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
