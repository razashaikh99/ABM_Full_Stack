import React from "react";
import { motion } from "framer-motion";

const Categories = () => {
    const categories = [
        {
            id: 1,
            name: "Baking & Dessert",
            // image: "/ProductsImages/cookware/category-cookware.jpg",
            image: "https://image.made-in-china.com/2f0j00RlepqcaoqWGz/Non-Stick-Springform-Metal-Baking-Cake-Mold-with-Removable-Bottom-Wbb17379.jpg",
        },
        {
            id: 2,
            name: "Drinkware",
            // image: "/ProductsImages/drinkware/category-drinkware.jpg",
            image: "https://kavakw.com/cdn/shop/articles/A1A1CEF7-F347-454A-ACC9-13AA9F055351.jpg?v=1738864918",
        },
        {
            id: 3,
            name: "Choppers & Slicers",
            // image: "/ProductsImages/appliances/category-appliances.jpg",
            image: "https://www.ratdin.pk/cdn/shop/products/mandoline-slicer-5-in-1-manual-vegetable-slicer-foldable-grater-slicer-food-and-vegetable-chopper-potato-slicer-household-kitchen-chopping-artifact-grater-peele-168012.jpg?v=1708590821",
        },
        {
            id: 4,
            name: "Kitchen Storage",
            // image: "/ProductsImages/storage/category-storage.jpg",
            image: "https://eveen.pk/cdn/shop/products/image_5e0dfc21-de20-49e4-8c18-e7f8ab497c2b.jpg?v=1714154729",
        },
        {
            id: 5,
            name: "Cutter & Sharpenrs",
            // image: "/ProductsImages/storage/category-storage.jpg",
            image: "https://eveen.pk/cdn/shop/files/73690954-B1E9-4B6B-8EE3-DF09B9678C0F.jpg?v=1727884314",
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        Shop by Category
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Explore premium kitchen essentials for your home
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-5">
                    {categories.map((cat) => (
                        <motion.div
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

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                                <h3 className="text-white text-xl font-semibold tracking-wide">
                                    {cat.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
