import useFooter from "./index.function";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    const { currentYear } = useFooter();

    return (
        <footer className="bg-foreground text-accent border-t border-gray-200 pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">

                <div>
                    <h2 className="text-2xl font-bold text-primary mb-3">
                        AlBayt<span className="text-secondary">Mart.</span>
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-600 mb-4">
                        Welcome to AlBaytMart, your trusted destination for premium
                        household essentials and modern appliances. We bring you
                        convenience, quality, and innovation — all in one place.
                    </p>

                    <div className="flex space-x-3">
                        <Link
                            to="#"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-secondary hover:text-white transition"
                        >
                            <FaFacebookF />
                        </Link>
                        <Link
                            to="#"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-secondary hover:text-white transition"
                        >
                            <FaInstagram />
                        </Link>
                        <Link
                            to="#"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-secondary hover:text-white transition"
                        >
                            <FaTwitter />
                        </Link>
                        <Link
                            to="#"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-secondary hover:text-white transition"
                        >
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-accent mb-4">
                        PRODUCTS
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                            <Link to="#" className="hover:text-secondary">
                                Drinkware
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-secondary">
                                Appliances
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-secondary">
                                Cookware
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="hover:text-secondary">
                                Storage
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-accent mb-4">
                        WEBSITE
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                            <Link to="/" className="hover:text-secondary">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/return-policy"
                                className="hover:text-secondary"
                            >
                                Return Policy
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-secondary">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-secondary">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-accent mb-4">
                        CONTACT
                    </h3>
                    <ul className="space-y-3 text-gray-600 text-sm">
                        <li>📞 +92-329-8660141</li>
                        <li>✉️ info.albaytmart@gmail.com</li>
                        <li>📍 Karachi, Pakistan</li>
                    </ul>
                </div>
            </div>

            <hr className="my-8 border-gray-200" />

            <div className="text-center text-gray-500 text-sm">
                © {currentYear} <span className="font-semibold">AlBaytMart</span>. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
