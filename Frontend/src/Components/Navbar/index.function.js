import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Hooks/useCart";
import { useAuth } from "../../Hooks/useAuth";

export default function useNavbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const [search, setSearch] = useState("");

    const { cartCount: itemCount, toggleCart } = useCart();

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (!mobileOpen) return;
        const previous = document.activeElement;
        const overflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const panel = document.getElementById("mobile-navigation");
        const focusable = () => panel?.querySelectorAll("nav a, nav button, nav input");
        focusable()?.[0]?.focus();
        const onKey = (event) => {
            if (event.key === "Escape") setMobileOpen(false);
            const nodes = focusable();
            if (event.key === "Tab" && nodes?.length) {
                const first = nodes[0],
                    last = nodes[nodes.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        };
        document.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = overflow;
            document.removeEventListener("keydown", onKey);
            previous?.focus();
        };
    }, [mobileOpen]);

    const toggleMobileMenu = () => setMobileOpen((value) => !value);

    const closeMobileMenu = () => setMobileOpen(false);

    const handleSearchChange = (event) => setSearch(event.target.value);

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        closeMobileMenu();
        navigate(search.trim() ? "/shop?q=" + encodeURIComponent(search.trim()) : "/shop");
    };

    return {
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
    };
}
