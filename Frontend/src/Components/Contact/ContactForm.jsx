import { useState } from "react";
import { toast } from "react-toastify";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill out all required fields!");
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            toast.success("Message sent successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <div className="bg-white shadow-lg rounded-xl md:rounded-2xl p-6 sm:p-8 h-full">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 sm:mb-6">
                Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                        <label className="block text-gray-700 mb-2 text-sm sm:text-base">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-sm sm:text-base"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2 text-sm sm:text-base">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-sm sm:text-base"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2 text-sm sm:text-base">
                        Subject
                    </label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject of your message"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-sm sm:text-base"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-2 text-sm sm:text-base">
                        Message *
                    </label>
                    <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message here..."
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none text-sm sm:text-base"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-secondary text-white font-medium px-6 py-3 rounded-lg hover:bg-primary transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <FaPaperPlane className="text-sm" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                <p className="text-gray-500 text-xs sm:text-sm mt-4">
                    * Required fields. We'll respond to your message within 24 hours.
                </p>
            </form>
        </div>
    );
};

export default ContactForm;