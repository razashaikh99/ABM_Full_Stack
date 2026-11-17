import * as Yup from "yup";
import { useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";

export default function useRegisterForm() {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, "Name must be at least 3 characters")
            .required("Full name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Please confirm your password"),
    });

    const handleSubmit = async (values, { resetForm }) => {
        setIsSubmitting(true);

        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    password: values.password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Registration failed");
            }

            login(data.user, data.token);
            toast.success("Account created successfully!");
            resetForm();
            navigate("/");
        } catch (error) {
            toast.error(error.message || "Registration failed");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleTogglePassword = () => setShowPassword(!showPassword);

    const handleToggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    return {
        showPassword,
        showConfirmPassword,
        isSubmitting,
        validationSchema,
        handleSubmit,
        handleTogglePassword,
        handleToggleConfirmPassword
    };
}
