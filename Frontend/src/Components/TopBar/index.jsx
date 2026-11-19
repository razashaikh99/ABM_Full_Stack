import { Link } from "react-router-dom";

export default function TopBar() {
    return (
        <div className="bg-primary text-white" data-testid="announcement">
            <div className="page-width flex min-h-9 items-center justify-between gap-4 py-2 text-xs tracking-wide">
                <span className="hidden sm:block">Thoughtful essentials. Everyday living.</span>

                <span className="mx-auto sm:mx-0">Welcome to a more considered home.</span>

                <Link to="/contact" className="hidden underline-offset-4 hover:underline sm:block">
                    Need a hand? Get in touch
                </Link>
            </div>
        </div>
    );
}
