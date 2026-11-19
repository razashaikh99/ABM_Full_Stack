import EmptyState from "../../Components/EmptyState/index";

export default function PageNotFound() {
    return (
        <div className="bg-surface">
            <p className="pt-12 text-center text-xs font-semibold tracking-widest text-secondary">
                404 · A LITTLE OFF THE BEATEN PATH
            </p>
            <EmptyState
                title="Let's find your way home."
                description="The page you’re looking for isn’t here. Your next everyday favourite might be."
                to="/"
                action="Back to home"
            />
        </div>
    );
}
