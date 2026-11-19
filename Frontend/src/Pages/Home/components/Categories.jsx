import { Link } from "react-router-dom";
import { homeCategories } from "../../../config";

export default function Categories() {
    return (
        <section className="page-width section-space">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <p className="eyebrow mb-3">A PLACE FOR EVERYTHING</p>
                    <h2 className="section-title">Find your everyday.</h2>
                </div>
                <Link to="/shop" className="text-link">
                    Shop all essentials
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
                {homeCategories.map((category) => (
                    <Link key={category.id} to={category.to || "/shop"} className="group">
                        <div className="mb-4 aspect-[1/1] overflow-hidden rounded-sm bg-surface">
                            <img
                                src={category.image}
                                alt={category.name}
                                loading="lazy"
                               className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="text-sm font-medium text-primary group-hover:underline">
                            {category.name}
                        </h3>
                    </Link>
                ))}
            </div>
        </section>
    );
}
