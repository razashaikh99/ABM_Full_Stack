import * as Yup from "yup";
import { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";

export default function useLoginForm() {

    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });

    const handleSubmit = async (values, { resetForm }) => {
        setIsSubmitting(true);

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: values.email,
                    password: values.password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Login failed");
            }

            login(data.user, data.token);
            toast.success("Login successful!");
            resetForm();
            navigate("/");
        } catch (error) {
            toast.error(error.message || "Login failed");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleTogglePassword = () => setShowPassword(!showPassword);

    return {
        showPassword,
        isSubmitting,
        validationSchema,
        handleSubmit,
        handleTogglePassword
    };
}
