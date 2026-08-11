import React, { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiUser, FiSearch, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { CartContext } from "../../Context/CartContext";
import Logo from "../../../public/Logo/logo.png"

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
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { cartItems, toggleCart } = useContext(CartContext);
    const navigate = useNavigate();

    // Total items count
    const itemCount = cartItems.reduce((acc, it) => acc + (it.qty || 1), 0);

    // Handle scroll for fixed navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        };
    }, [mobileOpen]);

    // Close mobile menu when clicking outside or pressing ESC
    useEffect(() => {
        const handleClickOutside = (e) => {
            const mobileMenu = document.querySelector('.mobile-menu');
            const menuButton = document.querySelector('.menu-button');

            if (mobileOpen && mobileMenu && menuButton) {
                const isClickInsideMenu = mobileMenu.contains(e.target);
                const isClickOnButton = menuButton.contains(e.target);

                if (!isClickInsideMenu && !isClickOnButton) {
                    setMobileOpen(false);
                }
            }
        };

        const handleEscape = (e) => {
            if (e.key === 'Escape' && mobileOpen) {
                setMobileOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [mobileOpen]);

    const toggleMobileMenu = () => {
        setMobileOpen(prev => !prev);
    };

    const closeMobileMenu = () => {
        setMobileOpen(false);
    };

    return (
        <header
            className={`sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? "shadow-lg" : "shadow-md"}`}
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <button
                            onClick={() => {
                                navigate("/");
                                closeMobileMenu();
                            }}
                            className="flex items-center gap-2"
                            aria-label="Go to home"
                        >
                            <img
                                src={Logo}
                                alt="AlBayt Mart"
                                className="h-8 md:h-10 w-auto object-contain"
                            />
                        </button>
                    </div>

                    {/* Desktop Navigation - Centered */}
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

                    {/* Right: Actions */}
                    <div className="flex items-center gap-2 md:gap-4">
                        {/* Search - Desktop */}
                        {/* <div className="hidden md:flex">
                            <label htmlFor="search" className="sr-only">Search products</label>
                            <div className="relative">
                                <input
                                    id="search"
                                    type="search"
                                    placeholder="Search products..."
                                    className="w-48 lg:w-64 border rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                                <FiSearch className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />
                            </div>
                        </div> */}

                        <button
                            onClick={() => {
                                navigate("/auth");
                                closeMobileMenu();
                            }}
                            className="hidden md:inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md hover:bg-gray-100 transition-colors"
                            aria-label="Account"
                        >
                            <FiUser className="w-5 h-5" />
                            <span className="hidden lg:inline text-md">Account</span>
                        </button>

                        <button
                            onClick={() => {
                                navigate("/wishlist");
                                closeMobileMenu();
                            }}
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

                        {/* Mobile menu button */}
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

            {/* Mobile Menu - Fixed Overlay */}
            <div className={`mobile-menu lg:hidden fixed inset-0 z-40 ${mobileOpen ? 'block' : 'hidden'}`}>
                {/* Overlay with fade animation */}
                <div
                    className={`absolute inset-0 bg-black transition-opacity duration-300 ${mobileOpen ? 'opacity-50' : 'opacity-0'}`}
                    onClick={closeMobileMenu}
                />

                {/* Menu Panel with slide animation */}
                <div className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl transform transition-transform duration-300 ease-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex items-center justify-between p-6 border-b">
                        <button
                            onClick={() => {
                                navigate("/");
                                closeMobileMenu();
                            }}
                            className="flex items-center gap-2"
                        >
                            <img
                                src={Logo}
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

                    {/* Mobile Search */}
                    {/* <div className="p-6 border-b">
                        <label htmlFor="mobile-search" className="sr-only">Search products</label>
                        <div className="relative">
                            <input
                                id="mobile-search"
                                type="search"
                                placeholder="Search products..."
                                className="w-full border rounded-lg py-3 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                            <FiSearch className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
                        </div>
                    </div> */}

                    {/* Mobile Navigation */}
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

                    {/* Mobile Account Actions */}
                    <div className="p-6 border-t">
                        <div className="space-y-3">
                            <button
                                onClick={() => {
                                    navigate("/auth");
                                    closeMobileMenu();
                                }}
                                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <FiUser className="w-5 h-5" />
                                <span className="font-medium">Account</span>
                            </button>
                            {/* <button
                                onClick={() => {
                                    navigate("/wishlist");
                                    closeMobileMenu();
                                }}
                                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <FiHeart className="w-5 h-5" />
                                <span className="font-medium">Wishlist</span>
                            </button> */}
                        </div>
                    </div>

                    {/* Contact Info */}
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