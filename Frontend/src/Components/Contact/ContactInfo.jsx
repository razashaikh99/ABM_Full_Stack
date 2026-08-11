import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const ContactInfo = () => {
    const infoItems = [
        {
            icon: <FaPhoneAlt className="text-secondary text-lg sm:text-xl" />,
            title: "Phone",
            detail: "+92-329-8660141",
            link: "tel:+923001234567"
        },
        {
            icon: <FaEnvelope className="text-secondary text-lg sm:text-xl" />,
            title: "Email",
            detail: "info.albaytmart@gmail.com",
            link: "mailto:info.albaytmart@gmail.com"
        },
        {
            icon: <FaMapMarkerAlt className="text-secondary text-lg sm:text-xl" />,
            title: "Address",
            detail: "North Nazimabad, Karachi, Pakistan",
        },
        {
            icon: <FaClock className="text-secondary text-lg sm:text-xl" />,
            title: "Working Hours",
            detail: "Mon - Sat: 9:00 AM - 9:00 PM",
        },
    ];

    return (
        <div className="bg-primary text-white rounded-xl md:rounded-2xl p-6 sm:p-8 shadow-lg h-full">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                Contact Information
            </h2>
            <p className="text-gray-100 mb-6 sm:mb-8 text-sm sm:text-base">
                Have a question or feedback? We'd love to hear from you.
                Fill out the form or contact us directly.
            </p>

            <ul className="space-y-4 sm:space-y-6">
                {infoItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                        <div className="p-3 bg-white/20 rounded-full flex-shrink-0">
                            {item.icon}
                        </div>
                        <div className="flex-1">
                            <h4 className="text-base sm:text-lg font-medium mb-1">{item.title}</h4>
                            {item.link ? (
                                <a
                                    href={item.link}
                                    className="text-white hover:text-gray-200 transition-colors"
                                >
                                    <p className="text-sm sm:text-base font-light">{item.detail}</p>
                                </a>
                            ) : (
                                <p className="text-sm sm:text-base font-light">{item.detail}</p>
                            )}
                        </div>
                    </li>
                ))}
            </ul>

            {/* Social Media (Optional) */}
            <div className="mt-8 sm:mt-10 pt-6 border-t border-white/20">
                <p className="text-gray-100 mb-3 text-sm sm:text-base">Follow us on social media:</p>
                <div className="flex gap-3">
                    <div className="flex space-x-3">
                        <a
                            href="#"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-secondary hover:text-white transition"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="#"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-secondary hover:text-white transition"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="#"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-secondary hover:text-white transition"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="#"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-secondary hover:text-white transition"
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;