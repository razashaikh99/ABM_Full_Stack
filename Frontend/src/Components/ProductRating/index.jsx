import { Star } from "lucide-react";

export default function ProductRating({ rating }) {
    if (!Number.isFinite(rating)) return null;

    return (
        <span
           className="inline-flex items-center gap-1.5 text-xs text-muted"
            aria-label={rating + " out of 5 stars"}
        >
            <Star size={13} className="fill-secondary text-secondary" aria-hidden="true" />
            {rating.toFixed(1)}
        </span>
    );
}
