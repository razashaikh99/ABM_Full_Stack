import { useState } from "react";
import { toast } from "react-toastify";
import { contactFormDefaults } from "../../config";
import { validateEmail } from "../../Utils/validations";

export default function useContactUsPage() {
    const [formData, setFormData] = useState(contactFormDefaults);

    const handleChange = (event) =>
        setFormData((previous) => ({ ...previous, [event.target.name]: event.target.value }));

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.name.trim() || !validateEmail(formData.email) || !formData.message.trim()) {
            toast.error("Please add your name, a valid email and your message.");
            return;
        }
        const subject = formData.subject.trim() || "A question for AlBayt Mart";
        const body = "From: " + formData.name + " (" + formData.email + ")\n\n" + formData.message;
        window.location.href =
            "mailto:info.albaytmart@gmail.com?subject=" +
            encodeURIComponent(subject) +
            "&body=" +
            encodeURIComponent(body);
    };

    return { formData, handleChange, handleSubmit };
}
