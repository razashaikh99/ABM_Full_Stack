import useNewsletter from "./index.function";
const Newsletter = () => {
    const {
        handleSubmit
    } = useNewsletter();

    return (
        <section className="w-full bg-blue-50 py-10 px-4">
            <div className="max-w-5xl mx-auto text-center">

                <h2 className="text-3xl font-semibold text-gray-800 mb-3">
                    Subscribe to Our Newsletter
                </h2>
                <p className="text-gray-600 mb-6">
                    Stay updated with our latest products, offers, and tech news. We promise no spam!
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3"
                >
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full sm:w-2/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full sm:w-auto bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                        Subscribe
                    </button>
                </form>

                <p className="text-sm text-gray-500 mt-4">
                    You can unsubscribe at any time.
                </p>
            </div>
        </section>
    );
};

export default Newsletter;
