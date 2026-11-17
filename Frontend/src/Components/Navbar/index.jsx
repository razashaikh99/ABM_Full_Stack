import useNavbar from "./index.function";
import { logo } from "../../assets/images/index";

import { NavLink } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiUser, FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const NavItem = ({ to, children, onClick }) => (
    <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
            `px-4 py-3 lg:py-2 rounded-lg lg:rounded-md text-sm lg:text-md font-medium transition-colors duration-200 ${isActive ? "bg-primary/10 text-secondary" : "hover:text-secondary hover:bg-gray-100"
            }`
        }
    >
        {children}
    </NavLink>
);

const Navbar = () => {
    const {
        mobileOpen,
        isScrolled,
        toggleCart,
        itemCount,
        toggleMobileMenu,
        closeMobileMenu,
        handleHomeNavigation,
        handleAccountNavigation,
        handleWishlistNavigation
    } = useNavbar();

    return (
        <header
            className={`sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? "shadow-lg" : "shadow-md"}`}
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">

                    <div className="flex items-center">
                        <button
                            onClick={handleHomeNavigation}
                            className="flex items-center gap-2"
                            aria-label="Go to home"
                        >
                            <img
                                src={logo}
                                alt="AlBayt Mart"
                                className="h-8 md:h-10 w-auto object-contain"
                            />
                        </button>
                    </div>

                    <nav className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
                        <div className="flex items-center space-x-1">
                            <NavItem to="/">Home</NavItem>
                            <NavItem to="/shop">Shop</NavItem>
                            <div className="relative group">
                                <button className="flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium hover:text-secondary transition-colors">
                                    Categories
                                    <FiChevronDown className="w-4 h-4 mt-0.5 transition-transform group-hover:rotate-180" />
                                </button>
                                <div className="absolute top-full left-0 w-48 bg-white shadow-2xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    <NavLink to="/shop?category=all" className="block px-4 py-2 hover:bg-gray-100">All Products</NavLink>
                                    <NavLink to="/shop?category=electronics" className="block px-4 py-2 hover:bg-gray-100">Electronics</NavLink>
                                    <NavLink to="/shop?category=fashion" className="block px-4 py-2 hover:bg-gray-100">Fashion</NavLink>
                                    <NavLink to="/shop?category=groceries" className="block px-4 py-2 hover:bg-gray-100">Groceries</NavLink>
                                </div>
                            </div>
                            <NavItem to="/about">About</NavItem>
                            <NavItem to="/contact">Contact</NavItem>
                        </div>
                    </nav>

                    <div className="flex items-center gap-2 md:gap-4">

                        <button
                            onClick={handleAccountNavigation}
                            className="hidden md:inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors"
                            aria-label="Account"
                        >
                            <FiUser className="w-5 h-5" />
                            <span className="hidden lg:inline text-md">Account</span>
                        </button>

                        <button
                            onClick={handleWishlistNavigation}
                            className="hidden md:inline-flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 transition-colors"
                            aria-label="Wishlist"
                        >
                            <FiHeart className="w-5 h-5" />
                        </button>

                        <button
                            onClick={toggleCart}
                            className="relative inline-flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 transition-colors"
                            aria-label="Open cart"
                        >
                            <FiShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
                            {itemCount > 0 && (
                                <span className="absolute -right-1 -top-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full bg-secondary text-white">
                                    {itemCount > 9 ? "9+" : itemCount}
                                </span>
                            )}
                        </button>

                        <button
                            className="menu-button inline-flex lg:hidden items-center justify-center p-2 rounded-md hover:bg-gray-100 transition-colors"
                            onClick={toggleMobileMenu}
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        >
                            {mobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`mobile-menu lg:hidden fixed inset-0 z-40 ${mobileOpen ? 'block' : 'hidden'}`}>

                <div
                    className={`absolute inset-0 bg-black transition-opacity duration-300 ${mobileOpen ? 'opacity-50' : 'opacity-0'}`}
                    onClick={closeMobileMenu}
                />

                <div className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl transform transition-transform duration-300 ease-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex items-center justify-between p-6 border-b">
                        <button
                            onClick={handleHomeNavigation}
                            className="flex items-center gap-2"
                        >
                            <img
                                src={logo}
                                alt="AlBayt Mart"
                                className="h-8 w-auto object-contain"
                            />
                        </button>
                        <button
                            onClick={closeMobileMenu}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Close menu"
                        >
                            <FiX className="w-6 h-6" />
                        </button>
                    </div>

                    <nav className="p-6">
                        <div className="space-y-1">
                            <NavItem to="/" onClick={closeMobileMenu}>Home</NavItem>
                            <NavItem to="/shop" onClick={closeMobileMenu}>Shop</NavItem>
                            <div className="py-6">
                                <h3 className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                                    Categories
                                </h3>
                                <div className="pl-4 space-y-1">
                                    <NavLink
                                        to="/shop?category=all"
                                        onClick={closeMobileMenu}
                                        className={({ isActive }) => `block px-4 py-2 rounded-lg text-sm hover:bg-gray-100 ${isActive ? 'bg-primary/10 text-secondary' : ''}`}
                                    >
                                        All Products
                                    </NavLink>
                                    <NavLink
                                        to="/shop?category=electronics"
                                        onClick={closeMobileMenu}
                                        className={({ isActive }) => `block px-4 py-2 rounded-lg text-sm hover:bg-gray-100 ${isActive ? 'bg-primary/10 text-secondary' : ''}`}
                                    >
                                        Electronics
                                    </NavLink>
                                    <NavLink
                                        to="/shop?category=fashion"
                                        onClick={closeMobileMenu}
                                        className={({ isActive }) => `block px-4 py-2 rounded-lg text-sm hover:bg-gray-100 ${isActive ? 'bg-primary/10 text-secondary' : ''}`}
                                    >
                                        Fashion
                                    </NavLink>
                                    <NavLink
                                        to="/shop?category=groceries"
                                        onClick={closeMobileMenu}
                                        className={({ isActive }) => `block px-4 py-2 rounded-lg text-sm hover:bg-gray-100 ${isActive ? 'bg-primary/10 text-secondary' : ''}`}
                                    >
                                        Groceries
                                    </NavLink>
                                </div>
                            </div>
                            <NavItem to="/about" onClick={closeMobileMenu}>About</NavItem>
                            <NavItem to="/contact" onClick={closeMobileMenu}>Contact</NavItem>
                        </div>
                    </nav>

                    <div className="p-6 border-t">
                        <div className="space-y-3">
                            <button
                                onClick={handleAccountNavigation}
                                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <FiUser className="w-5 h-5" />
                                <span className="font-medium">Account</span>
                            </button>

                        </div>
                    </div>

                    <div className="p-6 bg-gray-50 border-t">
                        <p className="text-sm text-gray-600 pb-2">
                            Need help? Call us:
                        </p>
                        <a href="tel:+923298660141" className="font-semibold text-primary hover:underline">+92-329-8660141</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
