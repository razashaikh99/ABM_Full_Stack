import Button from "../Button";
import { Link } from "react-router-dom";

export default function Newsletter() {
    return (
        <section className="bg-surface">
            <div className="page-width py-12 text-center">
                <p className="eyebrow mb-3">A LITTLE INSPIRATION</p>
                <h2 className="section-title mb-4">There's always something to discover.</h2>
                <p className="mb-6 text-sm text-muted">
                    Our newsletter isn’t available yet. Explore the latest additions to our collection.
                </p>
                <Button to="/shop" variant="outline">
                    Browse the collection
                </Button>
            </div>
        </section>
    );
}
