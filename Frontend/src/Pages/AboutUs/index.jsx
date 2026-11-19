import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import { aboutPageConfig, aboutValues } from "../../config";
import Breadcrumb from "../../Components/Breadcrumb/index";

export default function AboutUs() {
    return (
        <>
            <div className="page-width">
                <Breadcrumb title="Our story" />
                <div className="max-w-3xl pb-12 pt-4">
                    <p className="eyebrow mb-5">WELCOME TO ALBAYT MART</p>
                    <h1 className="display-title mb-6">
                        A more considered home.
                        <br />
                        An easier everyday.
                    </h1>
                    <p className="max-w-xl text-base leading-7 sm:leading-8 text-muted">
                        Home is where the small things matter. A morning cup. A meal made together. A space
                        that feels like you.
                    </p>
                </div>
            </div>
            <div className="page-width">
                <img
                    src={aboutPageConfig.image}
                    alt="Natural light and everyday essentials in a welcoming kitchen"
                    className="h-72 w-full rounded-sm object-cover sm:h-96 lg:h-[480px]"
                />
            </div>
            <section className="page-width section-space grid gap-8 md:grid-cols-2 md:gap-20">
                <h2 className="section-title max-w-sm">
                    Useful things.
                    <br />
                    Thoughtfully chosen.
                </h2>
                <div className="space-y-5 text-sm leading-7 sm:leading-8 text-muted">
                    <p>
                        AlBayt Mart is an online home for kitchen and household essentials. We bring together
                        practical products at approachable prices, helping you find the things that make daily
                        life a little better.
                    </p>
                    <p>
                        We’re drawn to the pieces you’ll reach for again and again. The ones that simplify a
                        routine, make room on a shelf or make you look forward to being in your kitchen.
                    </p>
                    <p>
                        From our home in Karachi to yours, we’re here to make shopping feel considered,
                        straightforward and personal.
                    </p>
                </div>
            </section>
            <section className="bg-surface">
                <div className="page-width section-space">
                    <p className="eyebrow mb-3">WHAT WE BELIEVE</p>
                    <h2 className="section-title mb-10">Everyday values.</h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {aboutValues.map((value) => (
                            <article key={value.title} className="border-t border-primary/20 pt-6">
                                <h3 className="mb-4 font-display text-2xl text-primary">{value.title}</h3>
                                <p className="text-sm leading-6 sm:leading-7 text-muted">{value.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="page-width py-16 text-center">
                <h2 className="section-title mb-6">Find your next everyday favourite.</h2>
                <Button to="/shop" >
                    Explore the collection
                </Button>
            </section>
        </>
    );
}
