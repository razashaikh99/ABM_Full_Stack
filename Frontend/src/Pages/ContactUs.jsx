// src/Pages/ContactUs.jsx
import React from "react";
import ContactForm from "../Components/Contact/ContactForm";
import ContactInfo from "../Components/Contact/ContactInfo";

const ContactUs = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <div className="bg-secondary/15 text-primary py-12 sm:py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
                    <p className="text-md sm:text-xl max-w-2xl mx-auto">
                        Get in touch with us for any questions or feedback
                    </p>
                </div>
            </div>

            {/* Contact Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-40 py-8 sm:py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    {/* Left: Contact Form */}
                    <div className="order-2 lg:order-1">
                        <ContactForm />
                    </div>

                    {/* Right: Contact Info */}
                    <div className="order-1 lg:order-2">
                        <ContactInfo />
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-40 pb-8 sm:pb-12 md:pb-16">
                <div className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-4 sm:p-6 border-b">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
                            📍 Our Location
                        </h3>
                    </div>
                    <div className="relative">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14469.427072907525!2d67.0575571!3d24.953973549999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3408545e8af11%3A0xd557fabb6ac61c9!2sSakhi%20Hassan%20Block%20N%20North%20Nazimabad%20Town%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1765355394898!5m2!1sen!2s" 
                        className="w-full h-64 sm:h-80 md:h-96"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        {/* <iframe
                            title="AlBayt Mart Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.3337620480355!2d67.0304!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fc3d0b36c1d%3A0xa25395b542b5a020!2sKarachi!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                            className="w-full h-64 sm:h-80 md:h-96"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe> */}
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                            <p className="text-sm font-medium text-gray-800">📍 North Nazimabad, Karachi, Pakistan</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Contact (Mobile Only) */}
            <div className="lg:hidden bg-white border-t">
                <div className="container mx-auto px-4 py-6">
                    <div className="grid grid-cols-2 gap-4">
                        <a
                            href="tel:+923001234567"
                            className="bg-green-50 text-green-700 p-3 rounded-lg text-center"
                        >
                            <div className="text-lg font-bold">📞 Call Now</div>
                            <div className="text-[12px]">+92-329-8660141</div>
                        </a>
                        <a
                            href="mailto:info.albaytmart@gmail.com"
                            className="bg-orange-50 text-secondary p-3 rounded-lg text-center"
                        >
                            <div className="text-lg font-bold">📧 Email</div>
                            <div className="text-[12px] truncate">info.albaytmart@gmail.com</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;