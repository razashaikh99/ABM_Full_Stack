import { Link } from "react-router-dom";
import { aboutAlbaytMart } from "../../../assets/images";

export default function WhyChooseUs() {
    return (
        <section className="bg-surface">
            <div className="mx-auto grid max-w-[1600px] md:grid-cols-2">
                <img
                    src={aboutAlbaytMart}
                    alt="Sunlight falling on a well-loved kitchen"
                    loading="lazy"
                   className="h-80 w-full object-cover md:h-[480px]"
                />
                <div className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-20">
                    <p className="eyebrow mb-5">A HOME, NOT JUST A HOUSE</p>
                    <h2 className="section-title mb-6 max-w-md">
                        For slow mornings.
                        <br />
                        And everything after.
                    </h2>
                    <p className="mb-7 max-w-md text-sm leading-6 sm:leading-7 text-muted">
                        We believe the things you use every day should be a pleasure to live with. Useful,
                        well considered and a little bit special. That’s what we look for. That’s what you’ll
                        find here.
                    </p>
                    <Link to="/about" className="text-link self-start">
                        Meet AlBayt Mart
                    </Link>
                </div>
            </div>
        </section>
    );
}
