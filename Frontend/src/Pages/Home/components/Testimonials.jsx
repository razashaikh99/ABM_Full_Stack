import { homeTestimonials } from "../../../config";
import { Star } from "lucide-react";

export default function Testimonials() {
    return (
        <section className="border-t border-line bg-surface">
            <div className="page-width section-space">
                <p className="eyebrow mb-3 text-center">FROM HOMES LIKE YOURS</p>
                <h2 className="section-title mb-10 text-center">Little things, well loved.</h2>
                <div className="grid gap-10 md:grid-cols-3">
                    {homeTestimonials.map((testimonial) => (
                        <figure key={testimonial.name} className="border-t border-primary/20 pt-6">
                            <div className="mb-4 flex items-center gap-2 text-secondary">
                                <Star size={15} className="fill-secondary" />
                                <span className="text-xs">{testimonial.rating} / 5</span>
                            </div>
                            <blockquote className="mb-5 font-display text-xl leading-7 sm:leading-8 text-primary">
                                “{testimonial.comment}”
                            </blockquote>
                            <figcaption className="text-sm font-medium text-muted">
                                {testimonial.name}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
