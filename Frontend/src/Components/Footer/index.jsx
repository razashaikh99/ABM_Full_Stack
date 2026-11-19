import { Link } from "react-router-dom";
import { logo } from "../../assets/images";
import { navigationLinks, footerLinks } from "../../config";
import useFooter from "./index.function";

export default function Footer() {
    const { currentYear } = useFooter();

    return (
        <footer className="border-t border-line bg-surface" data-testid="main-footer">
            <div className="page-width grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-12 lg:py-16">
                <div>
                    <Link to="/" aria-label="AlBayt Mart home">
                        <img src={logo} alt="AlBayt Mart" className="mb-6 w-40" />
                    </Link>
                    <p className="max-w-xs text-sm leading-6 sm:leading-7 text-muted">
                        Thoughtfully selected essentials for the kitchen, the home and all the moments in
                        between.
                    </p>
                </div>

                <div>
                    <h2 className="mb-5 text-sm font-semibold text-primary">Find your everyday</h2>
                    <ul className="space-y-3">
                        {navigationLinks.map((link) => (
                            <li key={link.label}>
                                <Link to={link.to} className="text-sm text-muted hover:text-primary">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="mb-5 text-sm font-semibold text-primary">A little help</h2>
                    <ul className="space-y-3">
                        {footerLinks.map((link) => (
                            <li key={link.label}>
                                <Link to={link.to} className="text-sm text-muted hover:text-primary">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="mb-5 text-sm font-semibold text-primary">Let's talk home</h2>
                    <p className="mb-4 text-sm leading-5 sm:leading-6 text-muted">
                        Questions about a product? We’re happy to help.
                    </p>
                    <Link
                        reloadDocument
                        to="mailto:info.albaytmart@gmail.com"
                       className="break-words text-sm font-medium text-primary underline underline-offset-4"
                    >
                        info.albaytmart@gmail.com
                    </Link>
                    <p className="mt-4 text-sm text-muted">Mon–Sat · 9 am–9 pm</p>
                    <p className="mt-2 text-sm text-muted">Karachi, Pakistan</p>
                </div>
            </div>

            <div className="border-t border-line">
                <div className="page-width flex flex-col justify-between gap-3 py-5 text-xs leading-5 text-muted sm:flex-row">
                    <p>© {currentYear} AlBayt Mart. All rights reserved.</p>
                    <p>A more considered home starts here.</p>
                </div>
            </div>
        </footer>
    );
}
