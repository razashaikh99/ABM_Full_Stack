import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../../Hooks/useCart";

export default function useNavbar() {

    const [mobileOpen, setMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { cartCount: itemCount, toggleCart } = useCart();
    const navigate = useNavigate();


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

    const handleHomeNavigation = () => {
        navigate("/");

        closeMobileMenu();
    };

    const handleAccountNavigation = () => {
        navigate("/auth");

        closeMobileMenu();
    };

    const handleWishlistNavigation = () => {
        navigate("/wishlist");

        closeMobileMenu();
    };

    return {
        mobileOpen,
        isScrolled,
        toggleCart,
        itemCount,
        toggleMobileMenu,
        closeMobileMenu,
        handleHomeNavigation,
        handleAccountNavigation,
        handleWishlistNavigation
    };
}
