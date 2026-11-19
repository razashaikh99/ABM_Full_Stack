import { contactMapUrl } from "../../config";
import Breadcrumb from "../../Components/Breadcrumb/index";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import useContactUsPage from "./index.function";

export default function ContactUs() {
    const { formData, handleChange, handleSubmit } = useContactUsPage();

    return (
        <div className="page-width pb-20">
            <Breadcrumb title="Contact us" />
            <div className="border-b border-line pb-10 pt-4">
                <p className="eyebrow mb-4">LET'S TALK</p>
                <h1 className="display-title mb-5">A little help, from real people.</h1>
                <p className="max-w-xl text-sm leading-6 sm:leading-7 text-muted">
                    A question about a product, your account or something else? We’d love to hear from you.
                </p>
            </div>
            <div className="grid gap-12 pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
                <ContactForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
                <ContactInfo />
            </div>

            <section
               className="mt-16 overflow-hidden rounded-sm border border-line"
                aria-label="Our location"
            >
                <iframe
                    title="AlBayt Mart location in North Nazimabad"
                    src={contactMapUrl}
                   className="h-72 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                <p className="border-t border-line bg-surface px-6 py-4 text-sm text-muted">
                    Find us in North Nazimabad, Karachi, Pakistan.
                </p>
            </section>
        </div>
    );
}
