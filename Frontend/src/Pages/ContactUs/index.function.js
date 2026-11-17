import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { contactFormDefaults } from "../../config/index";

export default function useContactUsPage() {
    const [formData, setFormData] = useState(contactFormDefaults);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const timerRef = useRef(null);

    useEffect(() => () => clearTimeout(timerRef.current), []);

    const handleChange = event => setFormData(previous => ({ ...previous, [event.target.name]: event.target.value }));

    const handleSubmit = event => {
        event.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill out all required fields!");
            return;
        }

        setIsSubmitting(true);

        timerRef.current = setTimeout(() => {
            toast.success("Message sent successfully!");
            setFormData(contactFormDefaults);
            setIsSubmitting(false);
        }, 1000);
    };

    return {
        formData,
        isSubmitting,
        handleChange,
        handleSubmit
    };
}
