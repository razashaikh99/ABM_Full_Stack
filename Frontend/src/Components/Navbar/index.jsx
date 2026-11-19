import Input from "../Input";
import Button from "../Button";
import { Link, NavLink } from "react-router-dom";
import { Search, ShoppingBag, UserRound, Menu, X } from "lucide-react";
import { logo } from "../../assets/images";
import { navigationLinks } from "../../config";
import useNavbar from "./index.function";

export default function Navbar() {
    const {
        mobileOpen,
        itemCount,
        toggleCart,
        toggleMobileMenu,
        closeMobileMenu,
        search,
        handleSearchChange,
        handleSearchSubmit,
        user,
        logout,
    } = useNavbar();

    return (
        <header className="sticky top-0 z-40 border-b border-line bg-white" data-testid="main-header">
            <div className="page-width flex h-20 items-center justify-between gap-5">
                <Button
                    variant="icon"
                   className="menu-button lg:hidden"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileOpen}
                    aria-controls="mobile-navigation"
                    onClick={toggleMobileMenu}
                >
                    <Menu size={22} />
                </Button>

                <Link to="/" aria-label="AlBayt Mart home" className="shrink-0">
                    <img src={logo} alt="AlBayt Mart" className="h-auto w-36 sm:w-44" />
                </Link>

                <form
                    onSubmit={handleSearchSubmit}
                   className="hidden w-full max-w-md items-center gap-3 border-b border-line py-2 lg:flex"
                    role="search"
                >
                    <Search size={19} className="text-muted" />

                    <Input variant="plain"
                        name="q"
                        value={search}
                        onChange={handleSearchChange}
                        placeholder="Find something for your home"
                        aria-label="Search products"
                       className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted"
                    />

                    <Button type="submit" variant="plain" className="text-xs font-semibold text-primary">
                        Search
                    </Button>
                </form>

                <div className="flex items-center gap-1 sm:gap-4">
                    {user ? (
                        <Button
                            onClick={logout}
                            variant="plain"
                           className="hidden text-sm text-muted hover:text-primary sm:block"
                        >
                            Sign out
                        </Button>
                    ) : (
                        <Button to="/login" variant="icon" className="hidden sm:flex" aria-label="Your account">
                            <UserRound size={21} />
                        </Button>
                    )}

                    <Button onClick={toggleCart} variant="icon" className="relative" aria-label="Open cart">
                        <ShoppingBag size={22} />
                        <span className="absolute right-0 top-0 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-secondary px-1 text-[10px] font-semibold text-white">
                            {itemCount}
                        </span>
                    </Button>
                </div>
            </div>

            <nav aria-label="Main navigation" className="hidden border-t border-line/70 lg:block">
                <div className="page-width flex h-12 items-center gap-9 text-sm">
                    {navigationLinks.map((link) => (
                        <NavLink
                            key={link.label}
                            to={link.to}
                           className="font-medium text-primary hover:text-secondary"
                        >
                            {link.label}
                        </NavLink>
                    ))}

                    <span className="flex-1" />

                    <Link to="/about" className="text-muted hover:text-primary">
                        Our story
                    </Link>

                    <Link to="/contact" className="text-muted hover:text-primary">
                        Get in touch
                    </Link>
                </div>
            </nav>

            {mobileOpen && (
                <div className="mobile-menu fixed inset-0 z-50 bg-black/30 lg:hidden" id="mobile-navigation">
                    <Button
                        variant="plain"
                       className="absolute inset-0"
                        aria-label="Dismiss menu"
                        onClick={closeMobileMenu}
                    />

                    <nav
                       className="absolute inset-y-0 left-0 flex w-[min(86vw,360px)] flex-col bg-white p-6"
                        aria-label="Mobile navigation"
                    >
                        <div className="mb-10 flex items-center justify-between">
                            <img src={logo} alt="AlBayt Mart" className="w-36" />
                            <Button variant="icon" aria-label="Close menu" onClick={closeMobileMenu}>
                                <X size={22} />
                            </Button>
                        </div>

                        <form
                            role="search"
                            onSubmit={handleSearchSubmit}
                           className="mb-6 flex items-center border-b border-line pb-3"
                        >
                            <Input variant="plain"
                                value={search}
                                onChange={handleSearchChange}
                                placeholder="Search essentials"
                                aria-label="Search products"
                               className="min-w-0 flex-1 text-sm outline-none"
                            />
                            <Button type="submit" variant="icon" aria-label="Search">
                                <Search size={20} />
                            </Button>
                        </form>

                        {navigationLinks.map((link) => (
                            <Link
                                key={link.label}
                                to={link.to}
                                onClick={closeMobileMenu}
                               className="border-b border-line py-4 text-base font-medium text-primary"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <Link to="/about" onClick={closeMobileMenu} className="mt-8 text-sm text-muted">
                            Our story
                        </Link>

                        <Link to="/contact" onClick={closeMobileMenu} className="mt-5 text-sm text-muted">
                            Contact us
                        </Link>

                        <Link
                            to="/auth"
                            onClick={closeMobileMenu}
                           className="mt-auto flex items-center gap-3 pt-8 text-sm font-medium text-primary"
                        >
                            <UserRound size={19} /> Your account
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
