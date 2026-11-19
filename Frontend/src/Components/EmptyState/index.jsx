import Button from "../Button";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

export default function EmptyState({ title, description, to = "/shop", action = "Explore the collection" }) {
    return (
        <div className="mx-auto flex max-w-lg flex-col items-center px-5 py-20 text-center">
            <ShoppingBag size={38} strokeWidth={1} className="mb-6 text-primary/50" />
            <h1 className="mb-4 font-display text-4xl text-primary">{title}</h1>
            <p className="mb-8 text-sm leading-6 sm:leading-7 text-muted">{description}</p>
            <Button to={to} >
                {action}
            </Button>
        </div>
    );
}
